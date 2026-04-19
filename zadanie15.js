// Nasz plan zajęć.
// Zmieniłem przedmioty i dodałem środę, żeby Twój plan był wyjątkowy!
const mySchedule = [
  { day: "poniedziałek", subject: "Aplikacje Mobilne", room: "Lab 2", online: false },
  { day: "wtorek", subject: "Bazy Danych", room: "online", online: true },
  { day: "środa", subject: "Język Angielski", room: "S301", online: false },
  { day: "czwartek", subject: "Grafika 3D", room: "803", online: false },
  { day: "piątek", subject: "Zarządzanie Projektami IT", room: "online", online: true }
];

// Krok 4: Liczymy, ile wszystkich zajęć znajduje się w planie tygodnia.
const totalClassesCount = mySchedule.length;

// Krok 1: Funkcja zwracająca zajęcia dla podanego dnia tygodnia.
function getDailyPlan(scheduleArray, targetDay) {
  return scheduleArray
    .filter(lesson => lesson.day === targetDay) // Najpierw odsiewamy tylko wybrany dzień
    .map(lesson => { // Krok 2: Potem od razu formatujemy wynik do czytelnej listy
      
      // Krok 3: Dodajemy warunkowe oznaczenie (operator trójargumentowy)
      const mode = lesson.online ? "💻 Online" : "🏫 Stacjonarnie";
      
      // Zwracamy piękny ciąg znaków: "Przedmiot - sala - tryb"
      return `${lesson.subject} (Sala: ${lesson.room}) -> Tryb: ${mode}`;
    });
}

// KROK 5 (Rozszerzenie własne): Wyszukiwanie zajęć tylko online lub tylko stacjonarnych.
function filterByMode(scheduleArray, isOnlineMode) {
  return scheduleArray.filter(lesson => lesson.online === isOnlineMode);
}

// --- WYŚWIETLANIE RAPORTÓW ---

console.log("=== TWÓJ PLAN TYGODNIA ===");
console.log(`Liczba wszystkich zajęć w tym tygodniu: ${totalClassesCount}\n`);

// Sprawdzamy plan na czwartek
const thursdayPlan = getDailyPlan(mySchedule, "czwartek");
console.log("📅 Plan na CZWARTEK:");
// Jeśli nie ma zajęć, tablica będzie pusta, zabezpieczmy to!
if (thursdayPlan.length > 0) {
  console.log(thursdayPlan.join("\n"));
} else {
  console.log("Dziś masz wolne!");
}

// Sprawdzamy plan na wtorek
console.log("\n📅 Plan na WTOREK:");
console.log(getDailyPlan(mySchedule, "wtorek").join("\n"));

// Wykorzystanie rozszerzenia: Pokaż tylko dni, w które mogę zostać w domu (online = true)
const allOnlineClasses = filterByMode(mySchedule, true);
console.log("\n🏠 Zestawienie wszystkich zajęć ONLINE:");
allOnlineClasses.forEach(lesson => {
  console.log(`- ${lesson.day.toUpperCase()}: ${lesson.subject}`);
});
