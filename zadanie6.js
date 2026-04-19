// Krok 1: Zapisujemy filmy w tablicy obiektów.
const myMovies = [
  { title: "Incepcja", category: "sci-fi", rating: 8.8, watched: true },
  { title: "Interstellar", category: "sci-fi", rating: 8.6, watched: false },
  { title: "Ojciec Chrzestny", category: "drama", rating: 9.2, watched: true },
  { title: "Matrix", category: "sci-fi", rating: 8.7, watched: false },
  { title: "Shrek", category: "animation", rating: 7.9, watched: false }
];

// Krok 2: Tworzymy listę filmów jeszcze nieobejrzanych.
// Zostawiamy tylko te filmy, dla których właściwość "watched" wynosi false.
const unwatchedMovies = myMovies.filter(movie => movie.watched === false);

// Krok 3: Tworzymy listę filmów z oceną większą niż 8.0.
const topRatedMovies = myMovies.filter(movie => movie.rating > 8.0);

// Krok 4: Budujemy osobną tablicę zawierającą wyłącznie tytuły z nieobejrzanych filmów.
// Bierzemy naszą nową tablicę z Kroku 2 i wyciągamy z niej samo pole "title".
const unwatchedTitles = unwatchedMovies.map(movie => movie.title);

// Krok 5: Wyświetlamy wyniki w konsoli w formie czytelnego raportu.
console.log("=== RAPORT FILMOWY ===");
console.log(`Filmy czekające na obejrzenie (${unwatchedTitles.length}):`, unwatchedTitles.join(", "));
console.log(`Liczba filmów z oceną powyżej 8.0 wynosi: ${topRatedMovies.length}`);

// ROZSZERZENIE WŁASNE: Łączenie metod (chaining).
// Chcemy od razu wyciągnąć same TYTUŁY filmów z kategorii "sci-fi".
// Najpierw filtrujemy, a potem od razu mapujemy wynik.
const sciFiTitles = myMovies
  .filter(movie => movie.category === "sci-fi")
  .map(movie => movie.title);

console.log("\nTwoje filmy Sci-Fi to:", sciFiTitles.join(" | "));
