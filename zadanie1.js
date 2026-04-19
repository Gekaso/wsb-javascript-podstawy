// Krok 1: Tworzymy obiekt użytkownika z wymaganymi polami: imię, nazwisko, miasto, wiek i kierunek[cite: 38].
// Pamiętamy o zasadzie: używamy const zamiast starego var[cite: 8].
const studentInfo = {
  firstName: "Sebastian",
  lastName: "Szwajnoch",
  city: "Jaworzno",
  age: 25,
  fieldOfStudy: "Architektura komputerowa",
  // Krok 5: Rozszerzenie własne – dodajemy własną cechę danych[cite: 42, 48].
  favoriteApp: "Photoshop"
};

// Krok 2: Wyświetlamy w konsoli pełne imię i nazwisko[cite: 39].
console.log("Imię i nazwisko studenta:", studentInfo.firstName, studentInfo.lastName);

// Krok 3: Zbudowanie komunikatu z użyciem "template literals" (czyli tych odwróconych apostrofów i ${})[cite: 40].
const description = `Student mieszka w mieście ${studentInfo.city} i jego kierunek to ${studentInfo.fieldOfStudy}.`;
console.log(description);

// Krok 4: Komunikat zależny od wieku za pomocą instrukcji warunkowej (if...else)[cite: 41].
if (studentInfo.age >= 18) {
  console.log("Użytkownik jest pełnoletni i ma pełen dostęp do systemu uczelni.");
} else {
  console.log("Użytkownik jest niepełnoletni, wymagana zgoda opiekuna.");
}

// Krok 5 c.d.: Wykorzystanie naszego nowo dodanego pola w dodatkowym komunikacie[cite: 42].
console.log(`Ciekawostka: Ulubionym programem tego studenta jest ${studentInfo.favoriteApp}.`);
