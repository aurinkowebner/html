

/**
 * 
 * 
 * statements ;
 * 
 * Varibles
 * 
 * var name = 'Kwasa's';
 * let name = '';
 * const name = '';
 * 
 * datatypes string, number float, 
 * boolean null undefined 
 * object array
 */
// 0.7848848484
// boolean true|false
let isOld = false; // camel casing
let isAGoodBoy = false;


let xyz = "Jeckonia Kwasa";

// string
let name  = "Jeckonia";
let school = "Jkuat";
let course = "BPHARM";
let age = 24;


// concatenation

// console.log("My name is " + name+  ", am",age + " and am a ", 
//     course, " student from " + school);

// operators


// object
let person={
    name: "Alice",
    age: 21,
    // hobbies: ["Music", "Reading", "Coding"],
    hobbies: JSON.stringify([{}]),
}


let mySelf = {
    name:  "Jeckonia",
    age: 24,
    course: "BPHARM",
    school: "Jkuat",
    isAdult: true,
    gender: null
}


console.log("My name is " + mySelf.name+  ", am",mySelf.age + " and am a ", 
    mySelf.course, " student from " + mySelf.school);

mySelf.name = "Kwasa"
mySelf.age = 28
mySelf.school = "UON"

console.log("My name is " + mySelf.name+  ", am",mySelf.age + " and am a ", 
    mySelf.course, " student from " + mySelf.school);

console.log("My name is " + person.name, "and am " + person.age, "years old", "and i love " + person.hobbies);



// array
let fruits = ["Oranges", "Mangoes", "Pawpaw"]
let teams = []


/**
 * Create a personal Bank 
 * 
 * firstname
 * lastname
 * 
 * identification card number
 * email
 * address:
    *  postal code
    *  street name
 * balance
 * Currency 
 * transactions
 *  [
 *  {
 *      date f transaction
 *      amount transacted
 *      branch 
 *  }
 * ]
 * 
 */


let personalBank = {
    fname: "Jeckonia",
    lname: "Onyango",
    email: "inc@pkenya.co.ke",
    bank: "I&M",
    address: {
        postalCode: 40405,
        streetName: "JKUAT Entrance Lane"
    },
    balance: 4000.05,
    currency: "USD",
    transactions: [
        {
            date: "04/04/2025",
            amount: 120.08,
            branch: "Main"
        },
        {
            date: "04/08/2025",
            amount: 110.08,
            branch: "Main"
        },
    ]
}