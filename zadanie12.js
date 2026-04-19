// Nasza książka adresowa
const myContacts = [
  { name: "Kamil Nowak", phone: "111-222-333", city: "Warszawa", favorite: true },
  { name: "Ewa Kowalska", phone: "444-555-666", city: "Kraków", favorite: false },
  { name: "Michał Wiśniewski", phone: "777-888-999", city: "Warszawa", favorite: true },
  { name: "Zofia Król", phone: "000-111-222", city: "Poznań", favorite: false }
];

// Krok 1: Funkcja zwracająca kontakty z wybranego miasta.
// Funkcja przyjmuje całą tablicę oraz nazwę miasta, którego szukamy.
function getContactsByCity(contactsArray, cityName) {
  return contactsArray.filter(contact => contact.city === cityName);
}

// Krok 2: Funkcja zwracająca tylko kontakty ulubione.
function getFavoriteContacts(contactsArray) {
  return contactsArray.filter(contact => contact.favorite === true);
}

// Krok 3: Funkcja formatująca wynik do postaci "imię - telefon".
// Przerabia całe obiekty na krótkie teksty za pomocą map().
function formatContacts(contactsArray) {
  return contactsArray.map(contact => `${contact.name} - ${contact.phone}`);
}

// KROK 5 (Rozszerzenie własne): Wyszukiwanie po fragmencie nazwy kontaktu.
function searchContactsByName(contactsArray, searchString) {
  // Używamy .toLowerCase(), aby wyszukiwanie nie zwracało uwagi na wielkość liter
  // (żeby "kowal" znalazło "Ewa Kowalska").
  const lowerSearch = searchString.toLowerCase();
  
  return contactsArray.filter(contact => 
    contact.name.toLowerCase().includes(lowerSearch)
  );
}

// Krok 4: Wywołanie funkcji dla różnych przypadków i wyświetlenie wyników.

console.log("=== KSIĄŻKA ADRESOWA ===");

// Przypadek 1: Szukamy ludzi z Warszawy i od razu ich formatujemy
const warsawContacts = getContactsByCity(myContacts, "Warszawa");
console.log("📍 Kontakty z Warszawy:");
console.log(formatContacts(warsawContacts)); // Oczekiwany wynik: [ 'Kamil Nowak - 111-222-333', 'Michał Wiśniewski - 777-888-999' ]

// Przypadek 2: Szukamy ulubionych kontaktów
const favContacts = getFavoriteContacts(myContacts);
console.log("\n⭐ Ulubione kontakty:");
console.log(formatContacts(favContacts));

// Przypadek 3 (Nasze rozszerzenie): Wyszukiwanie po fragmencie
const searchedContacts = searchContactsByName(myContacts, "kowal");
console.log("\n🔎 Wyniki wyszukiwania dla frazy 'kowal':");
console.log(formatContacts(searchedContacts));
