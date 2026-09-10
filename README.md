# KlikKod

KlikKod to prosta, przyjazna aplikacja do nauki programowania dla osób początkujących.

## Zawartość

- pulpit z misją na dziś,
- 17 praktycznych lekcji HTML, CSS i JavaScript,
- trzy osobne zakładki edytora: HTML (treść), CSS (wygląd) i JavaScript (reakcje),
- przycisk „Uruchom kod” z bezpiecznym podglądem wyniku,
- sprawdzanie podstawowych błędów składni z prostym wyjaśnieniem,
- podpowiedź dopasowana do zadania, dostępna dopiero po kliknięciu,
- zadania sprawdzane automatycznie,
- mini-quiz na pulpicie z informacją zwrotną i jednorazowymi punktami,
- Pracownię projektów z wizytówką, kartą interaktywną i ćwiczeniem responsywności,
- rozdział końcowy z tablicami, pętlami i własnym projektem,
- checklisty projektowe aktualizowane podczas pisania kodu,
- odznaki przyznawane na podstawie faktycznie ukończonych kroków,
- trwały zapis ukończonych lekcji w pamięci przeglądarki,
- opcjonalna historia ukończonych lekcji w bazie Neon (gdy Vercel ma `DATABASE_URL`),
- automatyczny zapis wersji roboczych kodu oraz przywracanie podglądu,
- responsywny wygląd na komputerze i telefonie.

## Jak pracować z lekcją

1. Otwórz temat z pulpitu albo z **Planu nauki**.
2. Czytaj przykład w trzech zakładkach: HTML układa treść, CSS nadaje wygląd, a JavaScript dodaje reakcje.
3. Zmień mały fragment kodu i kliknij **Uruchom kod**, aby zobaczyć efekt.
4. **Sprawdź kod** szuka podstawowych pomyłek, a **Sprawdź zadanie** najpierw pilnuje składni, a potem zalicza polecenie.
5. Jeśli eksperyment pójdzie w złą stronę, kliknij **Przywróć przykład** i zacznij jeszcze raz.
6. W projektach obserwuj checklistę — projekt zostanie zaliczony dopiero po spełnieniu wszystkich wymagań.
7. Kod zapisuje się jako wersja robocza. Przycisk **Przywróć przykład** usuwa również zapisany szkic tej lekcji.

## Historia w Neon

Historia nie wymaga jeszcze konta. Aplikacja używa anonimowego identyfikatora urządzenia i zapisuje ukończone lekcje wraz z datą. Bez skonfigurowanego Neona aplikacja bezpiecznie korzysta z zapisu lokalnego.

1. Utwórz bazę Neon i skopiuj jej connection string.
2. W projekcie Vercel dodaj zmienną środowiskową `DATABASE_URL` dla środowiska **Production** (oraz **Preview**, jeśli chcesz testować wdrożenia testowe).
3. Wdróż projekt ponownie. Tabela `klikkod_history` utworzy się automatycznie przy pierwszym zapisie.

Connection stringu nie wpisuj do plików ani do kodu. Przykładowa nazwa zmiennej znajduje się w `.env.example`.

## Uruchomienie lokalne

Sam ekran aplikacji działa jako statyczny frontend. Endpoint historii korzysta z zależności Neon instalowanych przez Vercel.

1. Otwórz plik `index.html` w przeglądarce.
2. Możesz korzystać z quizu i interakcji od razu.

## Wdrożenie na Vercel

### Przez panel Vercel

1. Wejdź na [vercel.com](https://vercel.com) i zaloguj się.
2. Wybierz **Add New → Project**.
3. Prześlij repozytorium zawierające pliki projektu albo użyj importu z GitHub.
4. Ustaw **Framework Preset** na `Other`.
5. Pozostaw pole build command puste.
6. Jako katalog wyjściowy pozostaw `/`.
7. Kliknij **Deploy**.

### Przez Vercel CLI

W folderze projektu uruchom:

```bash
vercel
```

Przy pytaniach wybierz bieżący folder projektu i zaakceptuj ustawienia domyślne.

## Pliki

- `index.html` — główny ekran aplikacji,
- `style.css` — wygląd i responsywność,
- `app-core.js` — rdzeń interfejsu, lekcje i interakcje,
- `course-content.js` — rozszerzenia kursu, walidacja i funkcje dydaktyczne,
- `api/history.js` — bezpieczny endpoint zapisu i odczytu historii,
- `package.json` / `package-lock.json` — zależność sterownika Neon,
- `.env.example` — nazwa wymaganej zmiennej środowiskowej bez sekretu,
- `vercel.json` — konfiguracja routingu Vercel.
