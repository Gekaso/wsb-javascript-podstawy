// Tablica z naszymi kosztami wyjazdu
const myTripCosts = [
  { label: "wynajem domku", amount: 800, paidBy: "Kasia" },
  { label: "paliwo", amount: 250, paidBy: "Tomek" },
  { label: "zakupy spożywcze", amount: 350, paidBy: "Kasia" },
  { label: "bilety do muzeum", amount: 100, paidBy: "Michał" }
];

// Krok 1: Policz całkowity koszt wyjazdu (klasyczny reduce).
const totalCost = myTripCosts.reduce((sum, item) => sum + item.amount, 0);

// Krok 2: Budujemy strukturę pomocniczą (obiekt) przechowującą sumę wydatków każdej osoby.
// Nasz akumulator (acc) zaczyna jako pusty obiekt {}.
const expensesByPerson = myTripCosts.reduce((acc, item) => {
  // Jeśli w obiekcie nie ma jeszcze "szufladki" dla tej osoby, tworzymy ją i dajemy jej 0.
  if (!acc[item.paidBy]) {
    acc[item.paidBy] = 0;
  }
  // Dodajemy kwotę do odpowiedniej osoby.
  acc[item.paidBy] += item.amount;
  
  return acc; // Zwracamy zaktualizowany obiekt do kolejnego okrążenia
}, {}); 

// Po tym kroku 'expensesByPerson' wygląda tak: { Kasia: 1150, Tomek: 250, Michał: 100 }

// Krok 3: Wskazujemy osobę, która zapłaciła najwięcej.
// Object.entries() zamienia nasz obiekt w tablicę par [ [klucz, wartość], [klucz, wartość] ]
// np. [ ["Kasia", 1150], ["Tomek", 250]... ]
const topSpender = Object.entries(expensesByPerson).reduce((max, current) => {
  // current[1] to kwota, current[0] to imię
  if (current[1] > max[1]) {
    return current;
  }
  return max;
});

// Krok 4 i 5 (Rozszerzenie): Wyświetl raport końcowy z podziałem, kto musi oddać pieniądze.
const numberOfPeople = Object.keys(expensesByPerson).length; // Liczymy, ile jest osób (kluczy)
const equalShare = totalCost / numberOfPeople; // Dzielimy po równo

console.log("=== ROZLICZENIE WYJAZDU ===");
console.log(`Całkowity koszt: ${totalCost} PLN`);
console.log(`Koszt na jedną osobę (przy równym podziale): ${equalShare.toFixed(2)} PLN\n`);

// Przechodzimy przez naszą strukturę pomocniczą, żeby wygenerować raport dla każdego.
for (const [person, amountPaid] of Object.entries(expensesByPerson)) {
  const balance = amountPaid - equalShare; // Obliczamy bilans (na plusie lub na minusie)
  
  let splitMessage = "";
  if (balance > 0) {
    splitMessage = `Zarządca wyjazdu musi Ci oddać: ${balance.toFixed(2)} PLN.`;
  } else if (balance < 0) {
    // Używamy Math.abs, żeby usunąć znak minusa z kwoty przy wyświetlaniu
    splitMessage = `Musisz dopłacić: ${Math.abs(balance).toFixed(2)} PLN.`; 
  } else {
    splitMessage = `Jesteś rozliczony(a) na zero.`;
  }
  
  console.log(`👤 ${person} zapłacił(a) łącznie: ${amountPaid} PLN.`);
  console.log(`   -> ${splitMessage}`);
}

console.log(`\n🏆 Najwięcej wydał(a) ${topSpender[0]}: ${topSpender[1]} PLN.`);
