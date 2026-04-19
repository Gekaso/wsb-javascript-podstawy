// Krok 1: Tworzymy tablicę obiektów.
// Rozszerzenie własne: do każdego produktu dopisałem własne pole "category".
const myShoppingList = [
  { name: "kawa", quantity: 2, urgent: true, category: "napoje" },
  { name: "woda mineralna", quantity: 6, urgent: false, category: "napoje" },
  { name: "masło", quantity: 1, urgent: true, category: "nabiał" },
  { name: "płatki owsiane", quantity: 2, urgent: false, category: "suche" }
];

// Krok 2: Wyświetlenie wszystkich produktów w formie krótkiej listy tekstowej.
console.log("--- PEŁNA LISTA ZAKUPÓW ---");
// Używamy metody forEach, która po prostu "przechodzi" przez każdy element i wykonuje na nim kod.
myShoppingList.forEach(item => {
  console.log(`- ${item.name} (sztuk: ${item.quantity})`);
});

// Krok 3: Filtrujemy listę, aby otrzymać tylko pilne produkty.
// Zostawiamy w nowej tablicy tylko te elementy, których właściwość "urgent" to true.
const urgentItems = myShoppingList.filter(item => item.urgent === true);

// Krok 4: Tworzymy nową tablicę samych nazw z wielkiej litery.
// map() bierze całe obiekty i wyciąga z nich samo "name", a funkcja toUpperCase() powiększa litery.
const uppercaseNames = myShoppingList.map(item => item.name.toUpperCase());

// Krok 5: Wyświetlamy liczbę pilnych pozycji i tablicę z wielkimi literami.
console.log(`\nMasz do kupienia ${urgentItems.length} pilne/ych rzeczy!`); // \n robi pustą linijkę (enter) w konsoli
console.log("Wszystkie nazwy produktów:", uppercaseNames);

// KROK 6 (ROZSZERZENIE WŁASNE): Dodatkowa funkcja filtrująca.
// Wykorzystujemy dodane wcześniej pole "category", aby sprawdzić, co musimy kupić w dziale z napojami.
const drinksToBuy = myShoppingList.filter(item => item.category === "napoje");
console.log("\n--- DZIAŁ NAPOJE ---");
console.log(`W dziale z napojami musisz wziąć ${drinksToBuy.length} produkty/ów.`);
