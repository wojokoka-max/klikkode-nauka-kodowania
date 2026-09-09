# KlikKod

KlikKod to prosta, przyjazna aplikacja do nauki programowania dla osób początkujących.

## Zawartość

- pulpit z misją na dziś,
- ścieżka krótkich lekcji,
- quiz z natychmiastową informacją zwrotną,
- zapis ukończenia pierwszej lekcji,
- responsywny wygląd na komputerze i telefonie.

## Uruchomienie lokalne

Nie są potrzebne żadne zależności ani instalacja Node.js.

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
- `script.js` — quiz i interakcje,
- `vercel.json` — konfiguracja routingu Vercel.
