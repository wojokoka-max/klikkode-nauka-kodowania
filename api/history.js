import { neon } from '@neondatabase/serverless';

const sql = () => {
  if (!process.env.DATABASE_URL) throw new Error('Brak DATABASE_URL');
  return neon(process.env.DATABASE_URL);
};

const deviceId = (request) => {
  const value = request.headers.get('x-klikkod-device') || '';
  return /^[a-zA-Z0-9_-]{16,100}$/.test(value) ? value : null;
};

const ensureTable = async (query) => {
  await query`
    CREATE TABLE IF NOT EXISTS klikkod_history (
      id BIGSERIAL PRIMARY KEY,
      device_id TEXT NOT NULL,
      event_type TEXT NOT NULL,
      lesson_index INTEGER,
      lesson_title TEXT,
      payload JSONB NOT NULL DEFAULT '{}'::jsonb,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await query`CREATE INDEX IF NOT EXISTS klikkod_history_device_created_idx ON klikkod_history (device_id, created_at DESC)`;
};

export default async function handler(request, response) {
  const id = deviceId(request);
  if (!id) return response.status(400).json({ error: 'Nieprawidłowy identyfikator urządzenia.' });

  try {
    const query = sql();
    await ensureTable(query);
    if (request.method === 'GET') {
      const rows = await query`
        SELECT id, event_type, lesson_index, lesson_title, payload, created_at
        FROM klikkod_history WHERE device_id = ${id}
        ORDER BY created_at DESC LIMIT 100
      `;
      return response.status(200).json({ events: rows });
    }
    if (request.method === 'POST') {
      const body = typeof request.body === 'string' ? JSON.parse(request.body || '{}') : request.body || {};
      const eventType = typeof body.eventType === 'string' ? body.eventType.slice(0, 60) : null;
      if (!eventType) return response.status(400).json({ error: 'Brak typu zdarzenia.' });
      const index = Number.isInteger(body.lessonIndex) ? body.lessonIndex : null;
      const title = typeof body.lessonTitle === 'string' ? body.lessonTitle.slice(0, 160) : null;
      const payload = body.payload && typeof body.payload === 'object' ? body.payload : {};
      const [event] = await query`
        INSERT INTO klikkod_history (device_id, event_type, lesson_index, lesson_title, payload)
        VALUES (${id}, ${eventType}, ${index}, ${title}, ${JSON.stringify(payload)}::jsonb)
        RETURNING id, event_type, lesson_index, lesson_title, payload, created_at
      `;
      return response.status(201).json({ event });
    }
    response.setHeader('Allow', 'GET, POST');
    return response.status(405).json({ error: 'Niedozwolona metoda.' });
  } catch (error) {
    console.error('KlikKod history error:', error);
    return response.status(503).json({ error: 'Historia jest chwilowo niedostępna.' });
  }
}
