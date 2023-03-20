// Create Object -> variable -> var let const
// var - let - const 
// immutable -> can't change
// mutable -> can change
// constant cant reassign

// let x = 10 
// x = 20


// const y  = 10
// y = 20

// const person = {
//     name: 'John',
//     age: 30,
//     // getter setter
// }

// person.age = 31

// console.log(person)

// js and other programming languages scope  {} -> block scope



// console.log(school.getSchoolName());



// function sum1  (a,b){
//     const result =  a + b; 
//     return result;
// }
  

// const sum1 = (a,b)=> a + b

// Arrow funciton 

// let x =  () => 10 + 2
// x()
  
  
// function sum2 (sum1,x){
//     const result =  sum1+x
//     console.log(result);
// }

// sum2(sum1,20);


// OOP -> Object Oriented Programming


// const personObj = {
//   name: 'Hogwarts',
//   getPersonName: function() {
//       return this.name;
//   }
// }


class Person {
  constructor(nameParam){
    console.log("constructor run!!!");
    this.name = nameParam;

    this.getPersonName();
  }

  getPersonName(){
    console.log("person name is " + this.name)
  }

  #privateMethod() {
    return 'hello world';
  }
}

// instance of class
const person = new Person("oguz");

person.getPersonName();

