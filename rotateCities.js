const cities = ["Tokyo", "London", "Rome", "Donlon", "Kyoto", "Paris", "Orem"];

const rotateCities = cities =>
    cities.map(city => {
        const rotateCityWords = [];
        const searchCities = [];
        let cityLetters = city.split("");
        let rotatingLetter;

        for (let i = 0; cityLetters.length - 1 > i; i++) {
            rotatingLetter = cityLetters.pop();
            cityLetters.unshift(rotatingLetter);
            rotateCityWords.push(cityLetters.join("").toLowerCase());
        }

        cities.forEach(seachCity => {
            if (rotateCityWords.includes(seachCity.toLowerCase())) {
                searchCities.push(city, seachCity);
            }
        });

        return searchCities.length > 0 ? searchCities : [city];
    });

console.log(rotateCities(cities));