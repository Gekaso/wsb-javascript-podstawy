// Nasza testowa tablica z ocenami studenta.
const myGrades = [3.5, 4.0, 5.0, 4.5, 3.0];

// Krok 2: Zapisujemy minimalny próg zaliczenia w osobnej stałej.
// Często nazywa się takie "główne" stałe wielkimi literami, żeby rzucały się w oczy.
const PASS_THRESHOLD = 3.0;

// Krok 4: Zamykamy logikę w funkcji, która przyjmuje tablicę ocen.
function summarizeGrades(gradesArray) {
  
  // Krok 1: Liczymy średnią. 
  // Najpierw sumujemy wszystkie oceny naszą "kulą śnieżną" (reduce).
  const sumOfGrades = gradesArray.reduce((total, grade) => total + grade, 0);
  
  // Dzielimy sumę przez liczbę ocen (długość tablicy), żeby uzyskać średnią.
  const average = sumOfGrades / gradesArray.length;

  // Krok 3: Określamy status za pomocą operatora trójargumentowego.
  // Jeśli średnia jest większa lub równa progowi, to "zaliczone", w przeciwnym razie "niezaliczone".
  const finalStatus = (average >= PASS_THRESHOLD) ? "zaliczone" : "niezaliczone";

  // Krok 5 (Rozszerzenie własne): Klasyfikacja słowna na podstawie średniej.
  let wordClassification = "";
  if (average >= 4.5) {
    wordClassification = "bardzo dobry";
  } else if (average >= 3.5) {
    wordClassification = "dobry";
  } else {
    wordClassification = "dostateczny";
  }

  // Funkcja musi ZWRÓCIĆ obiekt z wynikami.
  // Używamy .toFixed(2), aby średnia miała dwa miejsca po przecinku (np. 4.00).
  return {
    studentAverage: Number(average.toFixed(2)), // Number() zamienia tekst z powrotem na liczbę
    status: finalStatus,
    classification: wordClassification
  };
}

// Wywołujemy naszą funkcję, wrzucając do niej testowe oceny, a wynik zapisujemy do zmiennej.
const studentReport = summarizeGrades(myGrades);

// Wyświetlamy nasz piękny, gotowy obiekt w konsoli.
console.log("--- RAPORT STUDENTA ---");
console.log(studentReport);
