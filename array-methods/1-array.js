// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
```js
var temp = 0;
function largest(numbers) {
  numbers.forEach(x => {
    if(x>temp) {
      temp = x
    }
  });
  console.log(temp);
}
largest(numbers);
```

// Find longest string in strings
```js
var temp = "";

function longest(strings) {
  strings.forEach(x => {
    if (x.length > temp.length) {
      temp = x;
    }
  });
  console.log(temp);
}

longest(strings);
```
// Find all the even numbers
```js
function even(numbers) {
  numbers.forEach(x => {
    if (x % 2 === 0) {
      console.log(x + " is even");
    }
  })
}
even(numbers);
```
// Find all the odd numbers
```js
function odd(numbers) {
  numbers.forEach(x => {
    if (x % 2 === 1) {
      console.log(x + " is odd");
    }
  })
}
odd(numbers);
```
// Find all the words that contain 'is' use string method 'includes'
```js
function findIs(strings) {
  strings.filter((x) => {
    if (x.includes("is")) {
      console.log(x);
    }
  })
}
findIs(strings);
```
// Find all the words that contain 'is' use string method 'indexOf'
```js
function findIs(strings) {
  strings.reduce( (acc, cv) => {
    if(cv.indexOf("is") !== -1) {
      acc.push(cv);
    }
    return acc;
  },[])
```
// Check if all the numbers in numbers array are divisible by three use array method (every)
```js
var divisible = function(numbers) {
  numbers.every((x) => { 
    if (x%3 == 0) {
      console.log(x + true);
    }
  })
divisible(numbers);
}
```
//  Sort Array from smallest to largest
```js
numbers.sort();
console.log(numbers);
```
// Remove the last word in strings
```js
strings.pop();
```
// Add a new word in the array
```js
strings.push("Salami");
```
// Remove the first word in the array
```js
strings.shift();
```
// Place a new word at the start of the array use (unshift)
```js
strings.unshift("Pepper");
```
// Make a subset of numbers array [18,9,7,11]
```js
console.log(numbers.slice(3,7));
```
// Make a subset of strings array ['a','collection']
```js
console.log(strings.slice(2,4));
```
// Replace 12 & 18 with 1221 and 1881
function replace1(numbers) {
  return numbers.reduce((acc, cv) => {
    switch (cv) {
      case 12:
        acc.push(1221);
        return acc;
      case 18:
        acc.push(1881);
        return acc;
    }
    return acc;
  }, [])
}
console.log(replace1(numbers));
// Replace words with string in strings array

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'
var list1 = [];
function find(customers) {
  for (let x of customers) {
    if (x.firstname.startsWith("J")) {
      list1.push(x);
    }
  }
  console.log(list1);
}
find(customers);

// Create new array with firstname and lastname
var arr = [
  { firstname: "Saurabh", lastname: "Gupta"},
  { firstname: "Deependra", lastname: "Yadav"},
  { firstname: "Jitendra", lastname: "Agarwal"}
]
// Sort the array created above alphabetically
function sorting(arr) {
  return arr.map(x => `${x.firstname} ${x.lastname}`).sort();
}
console.log(sorting(arr));