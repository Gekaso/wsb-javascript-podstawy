// Nasz wirtualny koszyk
const myCart = [
  { name: "Mleko", price: 3.5, quantity: 2 },
  { name: "Kawa ziarnista", price: 25.0, quantity: 1 },
  { name: "Czekolada", price: 6.5, quantity: 3 }
];

// Stałe określające zasady rabatu
const discountThreshold = 50; // Próg od którego jest zniżka
const discountPercent = 10;   // 10% zniżki

// Krok 1 i 3: Obliczamy wartość każdej pozycji i budujemy opisy tekstowe za pomocą map().
const itemDescriptions = myCart.map(item => {
  const itemTotal = item.price * item.quantity;
  // Zwracamy ładny tekst, np. "2 x Mleko - 7.00 PLN"
  return `${item.quantity} x ${item.name} - ${itemTotal.toFixed(2)} PLN`;
});

// Krok 2: Liczymy łączną wartość całego koszyka za pomocą reduce().
// Do "sumy" (total) dodajemy wynik mnożenia ceny i ilości każdego produktu.
const totalValue = myCart.reduce((total, item) => total + (item.price * item.quantity), 0);

// Krok 4: Logika warunkowa dla rabatu.
// Zmienna let, bo kwota do zapłaty może się zmienić.
let finalPrice = totalValue; 
let discountApplied = false;

if (totalValue > discountThreshold) {
  const discountAmount = totalValue * (discountPercent / 100);
  finalPrice = totalValue - discountAmount;
  discountApplied = true;
}

// Krok 5: Wyświetlamy raport końcowy.
console.log("=== PODSUMOWANIE KOSZYKA ===");
// Wyświetlamy nasze ładne opisy (możemy użyć join do oddzielenia ich nową linią \n)
console.log(itemDescriptions.join("\n"));
console.log("----------------------------");
console.log(`Wartość koszyka: ${totalValue.toFixed(2)} PLN`);

if (discountApplied) {
  console.log(`Gratulacje! Przyznano rabat ${discountPercent}%.`);
  console.log(`Kwota do zapłaty po rabacie: ${finalPrice.toFixed(2)} PLN`);
} else {
  // ROZSZERZENIE WŁASNE: Obliczenie brakującej kwoty do uzyskania rabatu.
  const amountMissing = discountThreshold - totalValue;
  console.log(`Kwota do zapłaty: ${finalPrice.toFixed(2)} PLN`);
  console.log(`💡 Dodaj produkty za minimum ${amountMissing.toFixed(2)} PLN, aby otrzymać ${discountPercent}% rabatu!`);
}
