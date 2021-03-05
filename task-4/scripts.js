// 1. Get all the countries from Asia continent / “region” using Filter function
// 2. Get all the countries with population of less than 2 lacs using Filter function
// 3. Print the following details name, capital, flag using forEach function
// 4. Print the total population of countries using the reduce method.
// 5. Print the country which uses US Dollars as currency.
//-----------------------------------------------------------------//

//Get Countries from API

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(`Error ${xhr.status}:${xhr.statusText}`);
    } else {
        let countryData = JSON.parse(xhr.response);
        workPlace(countryData);
    }

}


const workPlace = countryData => {
    console.log(countryData[1]);
    // 1. Get all the countries from Asia continent / “region” using Filter function
    let countriesFromAsia = countryData.filter(country => country.region === 'Asia');
    console.log(countriesFromAsia);
    // 2. Get all the countries with population of less than 2 lacs using Filter function
    let countriesWithPopulationBelowTwoLacs = countryData.filter(country => country.population < 200000);
    console.log(countriesWithPopulationBelowTwoLacs);
    // 3. Print the following details name, capital, flag using forEach function
    countryData.forEach(country => console.log(country.name, country.capital, country.flag));
    // 4. Print the total population of countries using the reduce method.
    let totalPopulation = countryData.reduce((acc, cur) => acc + cur.population, 0);
    console.log(totalPopulation);
    // 5. Print the country which uses US Dollars as currency.
    let countriesWithCurrencyUSD = countryData.filter(country => country.currencies[0].code === "USD");
    console.log(countriesWithCurrencyUSD);
}