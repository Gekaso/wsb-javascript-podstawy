// Krok 1 i 3: Definiujemy funkcję. 
// "name" i "tasks" to nasze parametry (składniki, które wpadają do maszyny).
// Jeśli przy wywoływaniu funkcji zapomnimy podać zadań, zadziała PARAMETR DOMYŚLNY = ["odpoczynek"].
function createDayPlan(name, tasks = ["odpoczynek"]) {
  
  // Krok 5 (Rozszerzenie własne): Zliczamy, ile zadań jest w tablicy używając właściwości .length
  const tasksCount = tasks.length;
  
  // Funkcja .join(", ") bierze całą tablicę i skleja ją w jeden ładny tekst oddzielony przecinkami.
  const formattedTasks = tasks.join(", "); 
  
  // Krok 2: Używamy "return", aby funkcja ZWRÓCIŁA gotowy tekst (template literals).
  return `Cześć ${name}! Masz na dzisiaj zaplanowane ${tasksCount} zadania/zadań. Twoja lista: ${formattedTasks}.`;
}

// Krok 4: Wywołujemy funkcję dla co najmniej dwóch różnych użytkowników.

// Użytkownik 1: Podajemy imię oraz własną tablicę zadań.
const myTasks = ["nauka programowania", "trening na siłowni", "czytanie książki"];
const user1Plan = createDayPlan("Michał", myTasks);

// Użytkownik 2: Podajemy TYLKO imię. Nie podajemy tablicy zadań.
// Dzięki temu funkcja automatycznie użyje parametru domyślnego ["odpoczynek"].
const user2Plan = createDayPlan("Anna");

// Skoro funkcja "zwróciła" nam teksty i zapisaliśmy je w zmiennych, teraz możemy je wyświetlić w konsoli:
console.log("--- PLAN DNIA ---");
console.log(user1Plan);
console.log(user2Plan);
