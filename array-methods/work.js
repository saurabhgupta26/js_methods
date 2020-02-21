var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];
var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];

// Map();

1.
var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];
var mapping = numbers.map(x => console.log(x*x));

2.
var arr = [2, 5, 6, 3, 8, 9]; 
var newArr = arr.map(function(val, index){ 
  return {key:index, value:val*val}; 
})
console.log(newArr) 

3.
function sorting(arr) {
  return arr.map(x => `${x.firstname} ${x.lastname}`).sort();
}
console.log(sorting(arr));

4.
var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
function averageNumbers(numbers2) {
return numbers2.reduce((acc, cV) => (acc + cV))/numbers2.length;
}
console.log(averageNumbers(numbers2));
averageNumbers(numbers2);

5.
var name = "SAURABH";

var newName = Array.prototype.map.call(name, function(item) {
  return item + item.toLowerCase();
})

console.log(newName)

6. 
let kvArray = [{key: 1, value: 10}, 
  {key: 2, value: 20}, 
  {key: 3, value: 30}]

let rObj = {};
let reformattedArray = kvArray.map(obj => {
rObj[obj.key] = obj.value
return rObj
})

7.
let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  if(num %2 ===0) {
    return even
  }
  else {
    return odd
  }
})

8.
const myUsers = [
  { name: 'shark', likes: 'ocean' },
  { name: 'turtle', likes: 'pond' },
  { name: 'otter', likes: 'fish biscuits' }
]
const container = {};
const users = myUsers.map(item => {  
container[item.name] = item.likes;
container.age = item.name.length * 10;
return container;
})
console.log(users);

9.
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const newArray = myArray.map(value => value.map(number => number * 2));
console.log(newArray);
// [[2, 4, 6], [8, 10, 12], [14, 16, 18]]

10.
const hobbies = ['chess', 'pool'];
const newUsers = users.map(u => ({...u, hobbies}))

// filter()


1. 
let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']

2.
let sheeps = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

  function countSheeps(arrayOfSheep) {
  let counter = 0;
  return arrayOfSheep.filter(el => el === true).length;
  return counter;
  }

3. 
const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
function wordFind(users){
let res = users.filter(it => it.name.includes('oli'));
return res;
}
console.log(wordFind());

4.
var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];
var largenum = numbers.filter(function(num){
  return num>80;
});

5.
cuts.filter((word, i) => {
  return (word[0] === "S" || word[0] === "C" || word[0] === "T");
  }
);
6.
even =[];
cuts.filter(function styles(cuts_) {
if (cuts_.length %2 === 0) {
  even.push(cuts_);
  return even;
}
});

7.
char=[];
cuts.filter((word, i) => {
  if (word[0] === "S" || word[0] === "C" || word[0] === "T") {
    char.push(word);
  }
});

8.
var heroes = [
	{name: “Batman”, franchise: “DC”},
	{name: “Ironman”, franchise: “Marvel”},
	{name: “Thor”, franchise: “Marvel”},
	{name: “Superman”, franchise: “DC”}
];

var marvelHeroes =  heroes.filter(function(hero) {
	return hero.franchise == “Marvel”;
});

9.
const countries = [
  { name: 'Nigeria', continent: 'Africa'},
  { name: 'Nepal', continent: 'Asia'},
  { name: 'Angola', continent: 'Africa'},
  { name: 'Greece', continent: 'Europe'},
  { name: 'Kenya', continent: 'Africa'},
  { name: 'Greece', continent: 'Europe'}
]

let asianCountries = countries.filter(country => {
  return country.continent === 'Asia';
})

console.log(asianCountries);

10.
const names = ['Victoria', 'Pearl', 'Olivia', 'Annabel', 'Sandra', 'Sarah'];
    const filterItems = (letters) => {
        return names.filter(name => name.indexOf(letters) > -1);
    } 

    console.log(filterItems('ia'));
    // ["Victoria", "Olivia"]
//reduce();

1.
const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];const groupByAge = users.reduce((acc, it) => {
  acc[it.age] = acc[it.age] + 1 || 1;
  return acc;
}, {});
console.log(groupByAge);

2. 
const cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France',
  Porto: 'Portugal'
};

function result(cities) {
let countries = Object.keys(cities).reduce(
(acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc)
,{});
}
console.log()

3.
const arrA = [1, 4, 3, 2,7,9,11];
const arrB = [5, 2, 6, 7, 1,9,4];
function union(arrA, arrB) {
arrA.filter(it => arrB.includes(it));
return arrA
}
console.log(union(arrA, arrB));

4. 
var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];
var largeNum1 = numbers.filter(value => value>200).map(value1 => value1*5).reduce(function(count,value2){
  return count+value2;
},0);;
console.log(largeNum1);

5.
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

6. 
var strings = ["this", "is", "a", "collection", "of", "words"];
function findIs(strings) {
  strings.reduce( (acc, cv) => {
    if(cv.indexOf("is") !== -1) {
      acc.push(cv);
    }
    return acc;
  },[])
  console.log(findIs(strings));

7.
function capitalize_Words(string) {
	let words = string.split(" ");
	return words.reduce(function(final, current) {
		final += capitalize(current);
		if (current !== words[words.length - 1]) {
			final += " ";
		}
		return final;
	}, "");
}
console.log(capitalize_Words("js string exercises"));

8.
const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];const groupByAge = users.reduce((acc, it) => {
  acc[it.age] = acc[it.age] + 1 || 1;
  return acc;
}, {});
console.log(groupByAge);

9.
people = [
  {name: 'Mary', gender: 'girl'},
  {name: 'Paul', gender: 'boy'},
  {name: 'John', gender: 'boy'},
  {name: 'Lisa', gender: 'girl'},
  {name: 'Bill', gender: 'boy'},
  {name: 'Maklatura', gender: 'girl'}
]

var numBoys = people.reduce(function(n, person) {
  return n + (person.gender == 'boy');
}, 0);

10.
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x
}, initialValue)

console.log(sum)

//sort();

1.
var arr = [
  { firstname: "Saurabh", lastname: "Gupta"},
  { firstname: "Deependra", lastname: "Yadav"},
  { firstname: "Jitendra", lastname: "Agarwal"}
]
// Sort the array created above alphabetically
1.
function sorting(arr) {
  return arr.map(x => `${x.firstname} ${x.lastname}`).sort();
}
console.log(sorting(arr));

2.
numbers.forEach( ()  => {console.log(numbers.sort( (a,b) => {console.log(a - b)}))});

3.
numbers.sort((a, b) => {return (a - b)});

4.
function func() { 
  var arr = [2, 5, 8, 1, 4] 
  console.log(arr.sort()); 
}

5.
function myFunction() {
  cuts.sort();
  console.log(cuts);
}
myFunction(cuts);

6.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
