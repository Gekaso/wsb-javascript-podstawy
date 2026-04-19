// Nasza startowa baza zadań (używamy let, bo będziemy przypisywać nowe tablice)
let myTodos = [
  { id: 1, title: "Nauczyć się JavaScriptu", done: false },
  { id: 2, title: "Wynieść śmieci", done: true },
  { id: 3, title: "Zrobić zakupy", done: false }
];

// Krok 1: Funkcja dodająca nowe zadanie (podejście niemutowalne).
function addTodo(todoList, newTitle) {
  // Szukamy najwyższego ID w tablicy i dodajemy 1, żeby mieć unikalny numer.
  const maxId = Math.max(...todoList.map(task => task.id));
  
  const newTask = { 
    id: maxId + 1, 
    title: newTitle, 
    done: false 
  };
  
  // Zwracamy NOWĄ tablicę: bierzemy wszystkie stare elementy (...todoList) i dorzucamy nowe.
  return [...todoList, newTask];
}

// Krok 2: Funkcja oznaczająca zadanie jako wykonane.
function markAsDone(todoList, taskId) {
  return todoList.map(task => {
    if (task.id === taskId) {
      // Jeśli to jest zadanie, którego szukamy, zwracamy jego ksero ze zmienionym statusem.
      return { ...task, done: true };
    }
    // Jeśli to inne zadanie, po prostu je zwracamy.
    return task;
  });
}

// Krok 3: Funkcja zwracająca tylko zadania niewykonane.
function getPendingTodos(todoList) {
  // Zwracamy nową tablicę tylko z tymi zadaniami, gdzie "done" wynosi false (!task.done).
  return todoList.filter(task => !task.done);
}

// ROZSZERZENIE WŁASNE: Funkcja usuwająca zadanie z listy za pomocą jego ID.
function deleteTodo(todoList, taskId) {
  // Zostawiamy w tablicy wszystkie zadania OPRÓCZ tego, które chcemy usunąć.
  return todoList.filter(task => task.id !== taskId);
}

// --- Krok 5: Wyświetlenie wyników działania każdej funkcji ---

console.log("=== 1. DODAWANIE ZADANIA ===");
const listAfterAdding = addTodo(myTodos, "Obejrzeć nowy odcinek serialu");
console.log(listAfterAdding);

console.log("\n=== 2. OZNACZENIE JAKO WYKONANE ===");
// Bierzemy nową listę i oznaczamy zadanie o ID 3 jako zrobione.
const listAfterMarking = markAsDone(listAfterAdding, 3);
console.log(listAfterMarking);

console.log("\n=== 3. TYLKO NIEWYKONANE ZADANIA ===");
const pendingList = getPendingTodos(listAfterMarking);
console.log(pendingList);

console.log("\n=== 4. ROZSZERZENIE: USUNIĘCIE ZADANIA ===");
// Usuwamy zadanie o ID 2 (Wynieść śmieci), bo już dawno zrobione!
const listAfterDeleting = deleteTodo(listAfterMarking, 2);
console.log(listAfterDeleting);
