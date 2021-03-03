### [Tasks](https://github.com/MaitreyaSahu/guvi-zen-tasks#guvi-zen-tasks) > [Task-3](#guvi-zen---task-3)
---

# Guvi Zen - Task-3

### Do the below programs in anonymous function and arrow function.

1. Print odd numbers in an array
2. Convert all the strings to title caps in a string array
3. Sum of all numbers in an array
4. Return all the prime numbers in an array
5. Return all the palindromes in an array
6. Return median of two sorted arrays of same size
7. Remove duplicates from an array
8. Rotate an array by k times and return the rotated array



---
### 1. Print odd numbers in an array
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.filter(num => num % 2));
```

```javascript
   Output:
   ---------------
   [1, 3, 5, 7, 9]
```

---
### 2. Convert all the strings to title caps in a string array
```javascript
let names = ["ABC leanne graham", "ervin howell", "clementine bauch", "patricia lebsack", "chelsey dietrich", "mrs. dennis schulist", "kurtis weissnat", "nicholas runolfsdottir v", "glenna reichert", "clementina dubuque"];

const convertToTitleCase = string => string.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');

names = names.map(convertToTitleCase);

console.log(names);
```

```javascript
   Output:
   ---------------
   ["Abc Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina Dubuque"]
```
### 3. Sum of all numbers in an array
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arraySum = arr => arr.reduce((acc, cur) => acc + cur);

arraySum(numbers);
```
```javascript
   Output:
   ---------------
   45
```

### 4. Return all the prime numbers in an array
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const primeFilter = arr => arr.filter(isPrime);

const isPrime = num => {
    for (let i = 2, limit = Math.sqrt(num); i <= limit; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

primeFilter(numbers);
```
```javascript
    Output:
    ---------------
    [2, 3, 5, 7]
```

### 5. Return all the palindromes in an array
```javascript
let inputs = ["madam", "demo", "lol", "dummy", "pop", "test", "radar"];

const palindromeFilter = arr => arr.filter(isPalindrome);

const isPalindrome = input => {
    return input === input.split('').reverse().join('');
}

palindromeFilter(inputs);
```
```javascript
    Output:
    ---------------
    ["madam", "lol", "pop", "radar"]
```

### 6. Return median of two sorted arrays of same size

### 7. Remove duplicates from an array
```javascript
let numbers = [1, 2, 2, 5, 3, 4, 2, 5, 1];

const removeDuplicate = array => array.filter((num, index, arr) => arr.indexOf(num) === index);

removeDuplicate(numbers);
```
```javascript
    Output:
    ---------------
    [1, 2, 5, 3, 4]
```

### 8. Rotate an array by k times and return the rotated array
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const rotateArray = (array, rotation) => rotation % 2 ? numbers.reverse() : numbers;

rotateArray(numbers, 5); //[9, 8, 7, 6, 5, 4, 3, 2, 1]
rotateArray(numbers, 510); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
```
```javascript
    Output:
    ---------------
    [9, 8, 7, 6, 5, 4, 3, 2, 1]
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
```