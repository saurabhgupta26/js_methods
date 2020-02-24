var data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  },
  {
    name: "Pochi",
    age: 3,
    type: "dog"
  }
];

// write a function that will sum all of the dogs ages in dog years using for loop.
// 1 human year = 7 dog year

// your code goes here
```js
var dogAge = 0;
function sumAll(data) {
  for(let x of data) {
    if(x.type === "dog") {
    var temp = x.age * 7;
    dogAge = dogAge + temp; 
    }
  }
  console.log(dogAge);
}
sumAll(data);
```
// Solution is 105

// Write the same function using
// 1. filter - for filtering the cat or dog
```js
function sumAll1(data) {
  var temp = data.filter(x => {
     if(x.type === "dog") {
    return true;
  }
  else {
    return false;
  }
  })
}
sumAll1(data);
```
// 2. map - to multiply human year to dog year
```js
function sumAll(data) {
  var map1 = data.map(x => x.age * 7);
  console.log(map1);
}
```
// 3. reduce - to accumulate total age.
```js
function sumAll(map1) {
  return data.reduce((acc, cV) => (acc = acc + cV))
}
sumAll(map1);
```
// Solution 105