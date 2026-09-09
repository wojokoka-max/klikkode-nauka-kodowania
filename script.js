const feedback=document.querySelector('#feedback');
const announce=(message,kind='good')=>{feedback.textContent=message;feedback.className=`feedback ${kind}`;feedback.scrollIntoView({behavior:'smooth',block:'nearest'})};
document.querySelectorAll('[data-answer]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-answer]').forEach(b=>b.classList.remove('correct','wrong'));const ok=button.dataset.answer==='b';button.classList.add(ok?'correct':'wrong');announce(ok?'Brawo! Komputer właśnie powiedział „cześć”.':'Prawie! Sprawdź, co robi polecenie print.',ok?'good':'bad')}));
document.querySelector('#start').addEventListener('click',()=>document.querySelector('#lesson').scrollIntoView({behavior:'smooth'}));
document.querySelectorAll('.lesson').forEach(item=>item.addEventListener('click',()=>{document.querySelectorAll('.lesson').forEach(x=>x.classList.remove('selected'));item.classList.add('selected');announce(`Wybrano: ${item.querySelector('strong').textContent}`)}));
document.querySelector('#save').addEventListener('click',e=>{e.currentTarget.innerHTML='Zapisano <span>✓</span>';document.querySelector('.lesson').querySelector('.lesson-time').textContent='✓ Gotowe';announce('Postęp zapisany na tym urządzeniu.')});
document.querySelector('.link-button').addEventListener('click',()=>announce('Kolejne lekcje pojawią się już wkrótce.'));
document.querySelector('.bell').addEventListener('click',()=>announce('Brak nowych powiadomień.'));
document.querySelectorAll('nav a').forEach(item=>item.addEventListener('click',()=>{document.querySelectorAll('nav a').forEach(x=>x.classList.remove('nav-active'));item.classList.add('nav-active');announce(`Otworzono: ${item.textContent.trim()}`)}));
