1st
```js
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}
console.log(filterItems(fruits, 'ap'));
console.log(filterItems(fruits, 'an'));
```
2nd
```js
function isPositive(value) { 
    return value > 0; 
  } 
function func() { 
      var filtered = [112, 52, 0, -1, -14].filter(isPositive); 
      console.log(filtered);
  } 
  func(); 
```
3rd
```js
const students = ['aman', 'ankit', 'samir', 'krishna', 'naman'];
const filterValues = (name) => {
    return students.filter(data => {
        return data.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
}
console.log(filterValues('na'));
```

Map()

1st
```js
let friends = [{
    name: 'Joey',
    age: 29
  }, {
    name: 'Rachel',
    age: 30
  },
  {
    name: 'Ross',
    age: 34
  }, {
    name: 'Monika',
    age: 30
  }, {
    name: 'Pheobe',
    age: 33
  },{
    name: 'Chandler',
    age: 34
  }];
  
  let characters = [];
  
  friends.forEach(function (x) {
    characters.push(x.name);
  });

```
2nd 
```js
let numbers = [1, 2, 3];
let squares = numbers.map(item => item * item);
console.log(squares);
```
3rd 
```js
let map = Array.prototype.map
let a = map.call('Hello World', function(x) { 
  return x.charCodeAt(0)
})
```
```js
forEach()
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
let loop = forEachexit





```