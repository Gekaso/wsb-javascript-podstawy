// Krok 1: Tworzymy zmienne logiczne (boolean: true lub false) opisujące, co uczeń ma w plecaku[cite: 134].
const hasLaptop = true;
const hasCharger = false;
const dayType = "wykład"; [cite: 132]

// Rozszerzenie własne: sprawdzanie obecności legitymacji
const hasStudentId = true;

// Krok 2: Sprawdzamy gotowość za pomocą klasycznego if...else.
if (hasLaptop) {
  console.log("Zabrałeś laptopa, możesz notować na zajęciach.");
} else {
  console.log("Nie masz laptopa. Obyś miał chociaż zeszyt!");
}

// Krok 3: Operator trójargumentowy do zbudowania krótkiego komunikatu.
// Jeśli ma legitymację ORAZ ma laptopa -> gotowy. W przeciwnym razie -> niegotowy.
const readinessMessage = (hasLaptop && hasStudentId) ? "Status: W pełni gotowy na zajęcia!" : "Status: Czegoś brakuje, sprawdź plecak!";
console.log(readinessMessage);

// Krok 4: Użycie operatora && do dodatkowego ostrzeżenia.
// Czytamy to tak: Jeśli ma laptopa ORAZ NIE ma ładowarki (!hasCharger), to wyświetl błąd.
if (hasLaptop && !hasCharger) {
  console.log("OSTRZEŻENIE: Wziąłeś sprzęt, ale zapomniałeś ładowarki. Bateria może nie wytrzymać!");
}

// Krok 5: Osobny komunikat zależny od typu dnia[cite: 138].
if (dayType === "laboratorium") {
  console.log("Dzisiaj masz laboratoria, czeka Cię dużo pisania kodu.");
} else if (dayType === "wykład") {
  console.log("Dzisiaj masz wykład, skup się na teorii.");
} else {
  console.log("Brak zajęć albo nieznany typ dnia.");
}

// Kolejna część rozszerzenia własnego: krytyczny błąd, jeśli zapomniano legitymacji
if (!hasStudentId) {
  console.log("BŁĄD KRYTYCZNY: Nie masz legitymacji studenckiej, nie wejdziesz na wydział!");
}
