// 1. Write a JavaScript program to list the properties and values of a JavaScript object. (Object.keys)
var student = { 
  name : "David Rayy", 
  class : "VI", 
  rollno : 12,
  section : "B",
  bloodGroup : "A+"
};
```js
function student1(student) {
  for(let x in student ) {
    console.log(`${x}`+ ` : ` + `${student[x]}`)    
  };
}
student1(student);
```


// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};
```js
var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12
};  {
  delete student.rollno;
}
  console.log(student);

```
// 3. Write a function to get the length of an object.
```js
var counter = 0;
function student1(student) {
  for (let x in student) {
    counter = counter + 1;
  }
  console.log(counter);
};
student1(student);
```