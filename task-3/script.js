// Do the below programs in anonymous function and arrow function.

// - Print odd numbers in an array
// - Convert all the strings to title caps in a string array
// - Sum of all numbers in an array
// - Return all the prime numbers in an array
// - Return all the palindromes in an array
// - Return median of two sorted arrays of same size
// - Remove duplicates from an array
// - Rotate an array by k times and return the rotated array

// - Print odd numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.filter(num => num % 2));

// - Convert all the strings to title caps in a string array
let names = ["ABC leanne graham", "ervin howell", "clementine bauch", "patricia lebsack", "chelsey dietrich", "mrs. dennis schulist", "kurtis weissnat", "nicholas runolfsdottir v", "glenna reichert", "clementina dubuque"];
names = names.map(name => name.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' '));
console.log(names);

// - Sum of all numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.reduce((acc, cur) => acc + cur));

// - Return all the prime numbers in an array
const isPrime = num => {
    for (let i = 2, limit = Math.sqrt(num); i <= limit; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers.filter(isPrime));

// - Return all the palindromes in an array
const isPalindrome = input => {
    return input === input.split('').reverse().join('');
}

let inputs = ["madam", "demo", "lol", "dummy", "pop", "test", "radar"];
console.log(inputs.filter(isPalindrome));

// - Return median of two sorted arrays of same size

// - Remove duplicates from an array
let numbers = [1, 2, 2, 5, 3, 4, 2, 5, 1];
numbers = numbers.filter((num, index, arr) => arr.indexOf(num) === index);
console.log(numbers);