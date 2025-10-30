

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
let name = "Jeckonia";
let school = "Jkuat";
let course = "BPHARM";
let age = 24;


// concatenation

// console.log("My name is " + name+  ", am",age + " and am a ", 
//     course, " student from " + school);

// operators


// object
// let person = {
//     name: "Alice",
//     age: 21,
//     // hobbies: ["Music", "Reading", "Coding"],
//     hobbies: JSON.stringify([{}]),
// }


// let mySelf = {
//     name: "Jeckonia",
//     age: 24,
//     course: "BPHARM",
//     school: "Jkuat",
//     isAdult: true,
//     gender: null
// }


// console.log("My name is " + mySelf.name + ", am", mySelf.age + " and am a ",
//     mySelf.course, " student from " + mySelf.school);

// mySelf.name = "Kwasa"
// mySelf.age = 28
// mySelf.school = "UON"

// console.log("My name is " + mySelf.name + ", am", mySelf.age + " and am a ",
//     mySelf.course, " student from " + mySelf.school);

// console.log("My name is " + person.name, "and am " + person.age, "years old", "and i love " + person.hobbies);



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
    branch: "Kilifi",
    address: {
        postalCode: 40405,
        streetName: "JKUAT Entrance Lane"
    },
    balance: 80.04,
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
            branch: "Karen"
        },
    ]
}

// if(personalBank.balance > 100){
//     console.log("Hello, Mr.", personalBank.lname + " You have enough to withdraw")
// } else {
//     console.log("Sorry, Mr.", personalBank.lname + " You have insufficient funds")
// }

// if(personalBank.fname !== "Jeckonia") {
//     console.log("You are not authorized!")
// }

// if(personalBank.balance <= 80.05){
//     console.log("You have enough for the pizza")
// } else {
//     console.log("Oops! Sorry cant afford")
// }


!false

if (
    (
        !(personalBank.branch === "Kilifi")
        &&
        (
            personalBank.currency == "USD"
            ||
            personalBank.currency == "KES"
        )
    )
) {
    console.log("Welcome to branch " + personalBank.branch)
} else {
    console.log("We do not transact in that currency: ", personalBank.currency)
}


// == !=

// === !==

// console.log(4 != "4")


/**
 * 
 * Operators (arithmetic)
 * Looping
 * 
 * for 
 * while
 * do- while
 * 
 * condition ( if | switch )
 * 
 */

// modula


name = "Kwasa"


// + - / % * **


// let a = 9;
// let b = 4;

// let n = name / b;

// let p = "11" + "1"
// let n1 = "Jeckonia"
// let n2 = "Kwasa"

// let fname = n1 +  n2;

// console.log(fname);

// console.log(n)

// let sub = a - b;
// let div = a / b;
// let rem = a % b;
// let mul = a * b;
// let exp = a ** b;


// console.log(5**2)


// exp = exp * 2;


// let m = 2;

// // m = m + 5;

// m = m + 8

// console.log(n%5)

// m %= 5
// console.log(m);

// rem += 11;
// sub **= 5

// const dob = 2001
// const cYear = 2025;

// age = cYear - dob;

// console.log("I am " + age + " years old" );

// console.log(sub)
// console.log(div)
// console.log(rem)
// console.log(mul)
// console.log(exp)

// Comparison operators
/**
 * Less than ( < )
 * Greater than ( > )
 * Equal ( == )
 * Strict Equal ( === )
 * Not Equal ( != )
 * Less than-Equal ( <= )
 * Greater than-Equal ( >= )
 * 
 */


// Logical Operators

/**
 * AND (&&)
 * OR (||)
 * NULLISH null|undefined (??)
 * NOT (!)
 */



// AND Operator
console.log(true && false)
// OR Operator
console.log(false && false)


let p = undefined ?? "Kwasa";

console.log("Nullish, ", p)

// scope

// global scope | local scope



// if (condition) statement
// if (condition) {
// 
// }


age = 26;
// n 1< n < 10
// if (age < 18) {
//     console.log("You are too young!")
// } else if (18 < age < 25) {
//     console.log("Young adult")
// }
// else if (25 < age < 40) {
//     console.log("You are a yout still")
// }
// else {
//     console.log("No")
// }

/**
 * 
 *if (condition) {
    statement
 }  else if (condition) {
    statement
 } else if (condition) {
    statement
 } else {
    statement
    }
 * 
 */


// looping



/**
 * TODO: FOR LOOP
 * for(initialize; condition; update) {
 *  statement 
 * }
 * 
 */

// for(let i = 0; i < 100; i++){
//     // increment n--
//     console.log(i);

//     if(i === 50){
//         break
//     }
// };

// Array .length
// objects dot notation .propertyName
// array indexing

/**
 * indexing we start from 0
 * 
 */

// let _fruits = ["Apple", "Pawpaw"]


// for(let i = 0; i < _fruits.length; i++){
// console.log(_fruits[i]);

// if(_fruits[i] === "Apple"){
//     break;
//     continue;
// }

// }

// do while

// let n = 0;
// do {
//     console.log(n);
//     n++;
// } while (n<10)


// for(const f of _fruits){
//     console.log(f)
// }


// ++
let n = 0;

// n++; increment
n = n + 1;
// n--; decrement

console.log(n)

// --

// functions

/**
 * 
 * normal function
 * 
 * arrow unctions
 * 
 */


// annonymous functions

// (function($){

// })($);


// named function
/**
 * The above code defines a function named greet but does not contain any code inside the function
 * body.
 */
// const greet = function(){

// }

// greet()


// function functionName(){
//  this
// }

//  // arrow function
// const funcName = () => {

//     this

// }



// global scope
let _name = "Jeckonia";

// function greet(params) {


//     // console.log("This is our params", params)


//     // function _welcome() {
//     //     // local scope
//     //     console.log("Inner fuction invocation")
//     //     // console.log("Hello, " + _name);
//     // }

//     // _welcome()


//     // // local scope
//     // let _name = "Kwasa";
//     // console.log("Outer fuction invocation")
//     // // console.log("Hello, " + _name);

//     // // console.log("My param: ", params[5]);
//     // // guards (error handling)

//     // try {
//     //     // when everything is okay
//     //     console.log("My param: ", params[5]);
//     // } catch(e) {
//     //     // when code fails

//     //     console.error("This is an error", e)
//     // } finally {

//     // }



//     // if (params == undefined) {
//     //     console.log("We cold not find what you are looking for.")
//     // }
// }


// function greet(name) {
//     // create the error
//     name = "Paul"


//     try {
//         // false && false
//         if (name === undefined || null) {
//             throw Error("Name is required");
//         }
//         console.log("Welcome " + name)
//     } catch (e) {
//         console.error(e.message)
//     }
// }

const greet = (name) => {
    return name
}

const cost = 200;
const discRate = 0.25;

const calc = (price, rate = discRate) => {
    const bPrice = price * (1 - rate)
    return bPrice;
}

// let n_ = greet('kwasa');
// console.log(greet('kwasa'))
// greet()
// greet()
// greet()


// function  productPrice(pName, pPrice){
//     const p = calc(pPrice, 0.1)
//     console.log(`Product, ${pName}, Original price is $${pPrice}, selling price is $${p}`)
// }

// productPrice("Nokia", 115)


// const sum = (a, b) => {
//     return a + b;
// }


// let _sum1 = sum(3, 5);

// console.log(sum(39, 5))



// const createPerson = (name) => {

//     try {

//         if (!name) {
//             throw Error("You must provide the person's name");
//         }

//         let person = {
//             getName() {
//                 return `My name is ${name}`;
//             },
//             // getName: function(){
//             //     return `My name is ${name}`;
//             // }
//             // getName : () =>{

//             // }
//             getGender() {

//             },

//             updateName(newName) {
//                 if (!newName) {
//                     throw Error("You must provide a new name");
//                 }
//                 name = newName
//             }

//         }
//         return person
//     } catch (e) {
//         console.error(e.message)
//     }

// }


// const person = createPerson("Kwasa");


// console.log(person.getName())
// person.updateName()
// console.log(person.getName())


// const buble=()=>{
//     /////

// }
// buble();


// if( isValid){

// }


// if ( isValid){

// }
const bank = (bName, branches = []) => {
    // branches can be empty array to be populated later in the program
    // CRUD
    try {
        if (!bName) throw Error("You cannot initialize a bank without a name!");
        function _createAccount(
            bName,
            branchName,
            fName,
            lName,
            eAddress,
            pNumber,
        ) {
            return {
                bName,
                fName,
                lName,
                eAddress,
                pNumber,
                branchName
            }
        };
        return  {
            create(fName, lName, eAddress, pNumber, branchId = 0) {
                try {
                    if (!fName && !eAddress) {
                        throw Error("You must provide your name and email address");
                    }

                    if (!branches[branchId]) {
                        throw Error(`Branch Id, ${branchId} does not exist!`)
                    }
                    return _createAccount(bName, branches[branchId], fName, lName, eAddress, pNumber)

                } catch (error) {
                    console.error(error.message)
                }
            },
            deposit(eAddress, amount, branchId = 0) {
                try {
                    // if(amount < 100)) throw Error("You cant deposit less than $100");
                    if (amount < 100) throw Error("You cant deposit less than $100");
                    console.log(
                        `$${amount} deposited to ${eAddress} Account at 
                        ${branches[branchId]} at ${bName} Bank
                    `)
                } catch (error) {
                    console.error(error.message)
                }
            }
        }

        // return true

    } catch (error) {
        console.error(error.message)
        // return false
    }

}


// const b1Branches = []

// let b1 = bank("Equity", ["Awendo", "Juja"]);

// b1.deposit("kwasa@pkenya.co.ke", 200)

// console.log(b1.create("Kwasa", "Onyango", "kwasa@pkenya.co.ke"))

// let b2 = bank("KCB", ["Lithuli", "JKUAT"]);
// b2.deposit("kwasa@kcb.co.ke", 300)


// DOM
