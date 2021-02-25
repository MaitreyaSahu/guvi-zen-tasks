### [Tasks](https://github.com/MaitreyaSahu/guvi-zen-tasks#guvi-zen-tasks) > [task2](#guvi-zen---task-2)
---

# Guvi Zen - Task-2

## Try the rest countries api. 
### Extract and print the total population of all the countries in the console. use the html template. https://restcountries.eu/rest/v2/all
----
```javascript
// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it
xhr.open('GET', 'https://restcountries.eu/rest/v2/all');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function () {
    if (xhr.status != 200) { // analyze HTTP status of the response
        console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else { // show the result
        let countryData = JSON.parse(xhr.response);
        console.log(countryData.reduce((acc, cur) => acc + cur.population, 0)); // response is the server response
    }
};
```