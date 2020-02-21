var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
```js
var temp = "";
var findLongestWord = function(words) {
words.forEach((x) => {
  if (x.length > temp.length) {
    temp = x;
  }
})
}
console.log(temp);
```

var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
// Use reduce method of array
// Use the above sum and calculate the average.
```js
var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumArray(numbers1) {
return numbers1.reduce((acc, cV) => (acc + cV))/numbers1.length;
}
console.log(sumArray(numbers1,0));
sumArray(numbers1);
```
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
```js
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbers2) {
return numbers2.reduce((acc, cV) => (acc + cV))/numbers2.length;
}
console.log(averageNumbers(numbers2));
averageNumbers(numbers2);
```
var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
```js
var lengthOfWords = 0;
function averageWordLength(words2){
  words2.forEach((x) => 
  {
    lengthOfWords = lengthOfWords + x.length
  })
  console.log(lengthOfWords / words2.length);
}
```