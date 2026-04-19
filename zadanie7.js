// Krok 1: Definiujemy naszą tablicę zgłoszeń.
// Rozszerzenie własne: dodałem pole "priority" (priorytet).
const myRepairs = [
  { id: 1, client: "Jan", device: "smartfon", status: "nowe", priority: "wysoki" },
  { id: 2, client: "Kasia", device: "laptop", status: "w trakcie", priority: "normalny" },
  { id: 3, client: "Marek", device: "konsola", status: "w trakcie", priority: "wysoki" },
  { id: 4, client: "Zofia", device: "tablet", status: "zakończone", priority: "normalny" }
];

// Krok 2: Znajdź zgłoszenie o wskazanym id za pomocą find().
// find() szuka pierwszego elementu, który spełnia warunek i nam go zwraca.
const searchedRepair = myRepairs.find(repair => repair.id === 2);
console.log("Znalezione zgłoszenie (ID 2):", searchedRepair);

// Krok 3 i 4: Niemutowalna aktualizacja za pomocą map() i spread syntax (...).
// Chcemy zmienić status zgłoszenia ID 1 z "nowe" na "w trakcie".
const updatedRepairs = myRepairs.map(repair => {
  if (repair.id === 1) {
    // Jeśli to nasz szukany element (ID 1), tworzymy NOWY obiekt.
    // ...repair kopiuje wszystkie stare właściwości, a status: "w trakcie" nadpisuje starą wartość[cite: 237, 238].
    return { ...repair, status: "w trakcie" };
  }
  // Jeśli to inny element, zwracamy go bez żadnych zmian.
  return repair;
});

// Krok 5: Policz, ile zgłoszeń ma status "w trakcie" (już po naszej aktualizacji).
// Filtrujemy tylko te "w trakcie" i sprawdzamy długość (.length) nowej tablicy[cite: 239, 245].
const inProgressCount = updatedRepairs.filter(repair => repair.status === "w trakcie").length;

// Krok 6: Wyświetl oryginalną i zaktualizowaną tablicę, by udowodnić niemutowalność[cite: 240, 244].
console.log("\n--- ORYGINALNA TABLICA (brak zmian u Jana) ---");
console.log(myRepairs);

console.log("\n--- ZAKTUALIZOWANA TABLICA (Jan ma status 'w trakcie') ---");
console.log(updatedRepairs);

console.log(`\nLiczba zgłoszeń 'w trakcie' po aktualizacji: ${inProgressCount}`);

// ROZSZERZENIE WŁASNE: Filtrowanie po dodanym polu.
// Szukamy sprzętów, które mają "wysoki" priorytet i nie są jeszcze zakończone (!== oznacza "nie jest równe").
const urgentRepairs = updatedRepairs.filter(repair => repair.priority === "wysoki" && repair.status !== "zakończone");
console.log("\n⚠️ PILNE naprawy do wykonania:", urgentRepairs);
