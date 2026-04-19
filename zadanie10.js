// Nasza tablica obiektów z treningami [cite: 347]
const myActivities = [
  { type: "pływanie", minutes: 45, calories: 400 },
  { type: "joga", minutes: 30, calories: 150 },
  { type: "jazda na rolkach", minutes: 60, calories: 500 },
  { type: "szybki marsz", minutes: 20, calories: 120 }
];

// Krok 1: Liczymy łączny czas wszystkich aktywności (reduce) [cite: 338]
const totalMinutes = myActivities.reduce((sum, act) => sum + act.minutes, 0);

// Krok 2: Liczymy łączną liczbę spalonych kalorii (reduce) [cite: 339]
const totalCalories = myActivities.reduce((sum, act) => sum + act.calories, 0);

// Krok 3: Odfiltruj aktywności dłuższe niż 30 minut (filter) [cite: 340]
const longWorkouts = myActivities.filter(act => act.minutes > 30);

// KROK 5 (Rozszerzenie własne): Szukamy najbardziej kalorycznego treningu 
// reduce() porównuje obecnego "lidera" (max) z kolejnym treningiem (current)
const mostCaloric = myActivities.reduce((max, current) => {
  if (current.calories > max.calories) {
    return current; // Jeśli current ma więcej kalorii, staje się nowym liderem
  } else {
    return max; // Jeśli nie, stary lider zostaje na swoim miejscu
  }
});

// Krok 4: Budujemy krótki raport tekstowy z użyciem template literals [cite: 341]
// Raport zawiera wymagane co najmniej 3 wartości liczbowe [cite: 345]
console.log(`=== RAPORT SPORTOWY ===`);
console.log(`Zaliczyłeś w tym tygodniu ${myActivities.length} treningi(ów).`);
console.log(`Łączny czas w ruchu to ${totalMinutes} minut, podczas których spaliłeś ${totalCalories} kcal!`);
console.log(`Liczba długich treningów (powyżej 30 min): ${longWorkouts.length}`);
console.log(`🏆 Twój najbardziej intensywny trening to ${mostCaloric.type} (${mostCaloric.calories} kcal). Oby tak dalej!`);
