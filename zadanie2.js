// Krok 1: Zapisujemy wydatki w tablicy liczb.
// Tablice tworzymy używając nawiasów kwadratowych [].
const myExpenses = [20.5, 50, 15.99, 40, 70.2, 10, 35.5];

// Krok 2: Liczymy sumę wszystkich wydatków za pomocą specjalnej funkcji reduce() - tak wymaga wykładowca.
// Co robi reduce()? "Zwiń" tablicę do jednej wartości. 
// Działa jak kula śnieżna: bierze dotychczasową sumę (total) i dodaje do niej kolejny wydatek (expense). 
// To zero "0" na końcu oznacza, że nasza kula śnieżna zaczyna od zera.
const totalSum = myExpenses.reduce((total, expense) => total + expense, 0);

// Krok 3: Liczymy średni wydatek na podstawie liczby elementów w tablicy.
// myExpenses.length mówi nam, ile dokładnie jest przedmiotów na naszej liście (w tym przypadku 7).
const averageExpense = totalSum / myExpenses.length;

// Krok 4: Wyznaczamy największy wydatek.
// Math.max to wbudowany w JavaScript kalkulator znajdujący największą liczbę.
// Te trzy kropki (...) to tzw. "spread operator" - on "wysypuje" liczby z naszej tablicy tak, aby Math.max mogło je przejrzeć.
const highestExpense = Math.max(...myExpenses);

// Krok 5: Wyświetlamy końcowy raport w konsoli w czytelnej formie tekstowej używając template literals.
// Użyłem funkcji toFixed(2), żeby uciąć długie liczby po przecinku do ładnych dwóch miejsc (jak grosze).
console.log(`--- RAPORT BUDŻETOWY ---`);
console.log(`Całkowita suma wydatków: ${totalSum.toFixed(2)} PLN`);
console.log(`Średni wydatek wynosi: ${averageExpense.toFixed(2)} PLN`);
console.log(`Najdroższy zakup kosztował: ${highestExpense} PLN`);

// ROZSZERZENIE WŁASNE: Sprawdzenie, czy zmieściliśmy się w założonym budżecie.
const weeklyBudget = 200;

if (totalSum > weeklyBudget) {
  console.log(`UWAGA! Przekroczyłeś swój tygodniowy budżet o ${(totalSum - weeklyBudget).toFixed(2)} PLN.`);
} else {
  console.log(`Świetnie! Zmieściłeś się w budżecie. Zostało Ci ${(weeklyBudget - totalSum).toFixed(2)} PLN.`);
}
