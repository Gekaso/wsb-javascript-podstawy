// Krok 1 i 5 (Rozszerzenie): Tworzymy funkcję ASYNCHRONICZNĄ (async), która przyjmuje latitude i longitude.
async function checkWeather(latitude, longitude, cityName) {
  
  // Krok 4: Opakowujemy wszystko w blok try...catch, aby bezpiecznie łapać błędy.
  try {
    console.log(`⏳ Łączenie z serwerem dla miasta ${cityName}...`);

    // Dynamicznie budujemy link do API, wstrzykując nasze współrzędne za pomocą template literals.
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    // Krok 2a: Wysyłamy zapytanie i CZEKAMY (await) na odpowiedź z serwera.
    const response = await fetch(apiUrl);

    // Ręczne sprawdzenie, czy serwer na pewno zwrócił kod sukcesu (np. 200 OK).
    // Jeśli nie, "rzucamy" naszym własnym błędem prosto do bloku catch.
    if (!response.ok) {
      throw new Error(`Błąd połączenia: ${response.status}`);
    }

    // Krok 2b: CZEKAMY (await) na rozpakowanie danych do formatu JSON, który JavaScript potrafi przeczytać.
    const weatherData = await response.json();

    // Krok 3: Wyciągamy konkretne wartości z otrzymanego JSON-a.
    const temperature = weatherData.current_weather.temperature;
    const windSpeed = weatherData.current_weather.windspeed;

    // Wyświetlamy piękny raport.
    console.log(`\n🌤️  POGODA AKTUALNA: ${cityName.toUpperCase()}`);
    console.log(`🌡️  Temperatura: ${temperature} °C`);
    console.log(`💨 Prędkość wiatru: ${windSpeed} km/h`);
    console.log("-----------------------------------");

  } catch (error) {
    // Jeśli cokolwiek w bloku 'try' pójdzie nie tak (brak sieci, literówka w linku), lądujemy tutaj!
    console.error(`\n❌ WYSTĄPIŁ BŁĄD KRYTYCZNY DLA MIASTA ${cityName.toUpperCase()}:`);
    console.error(error.message);
    console.log("Spróbuj ponownie później lub sprawdź połączenie z internetem.");
  }
}

// Wywołujemy funkcję dla kilku miast, aby udowodnić, że rozszerzenie własne działa świetnie.

// Sprawdzamy Jaworzno (Twoja aktualna lokalizacja)
checkWeather(50.20, 19.27, "Jaworzno");

// Sprawdzamy np. Rzym (Włochy)
// Używamy opóźnienia czasowego (setTimeout), żeby wpisy w konsoli nam się nie pomieszały (API potrzebuje ułamka sekundy na odpowiedź).
setTimeout(() => {
  checkWeather(41.90, 12.49, "Rzym");
}, 1000); 

// Testujemy blok catch! Podajemy błędny (wymyślony) adres z ogromnymi współrzędnymi, na co serwer odpowie błędem 400.
setTimeout(() => {
  checkWeather(9999.99, 9999.99, "Baza na Marsie");
}, 2000);
