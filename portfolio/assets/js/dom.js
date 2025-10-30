/**
 * DOM
 * 
 * (Document, Element, Attr, Node)
 * 
 * Selecting Html Elements in the Dom
 * 
 * 1: .querySelector('selector')
 * 2: .querySelectorAll('selector')
 * 3: .getElementById('idSelector')
 * 4: .getElementByClassName('className')
 * 5: .getElementByTagName('tag')
 */

// const h1 = document.querySelector("H1") tag selection
// const h1 = document.querySelector("#h1-4") id selection
// const h1 = document.querySelector(".h1-4") class selection
// const h1 = document.getElementById("h1-4") 
// const h1 = document.getElementsByClassName("h1-4")
// const h1 = document.getElementsByTagName("H1") 
// console.log(h1);
// if (!h1) {
//     console.log("Not found the node")
// }

// const h1s = document.querySelectorAll("H1")
// console.log(h1s);

// for (let i = 0; i < h1s.length; i++) {
//     console.log(h1s[i])
// }



// for (const h1 of h1s) {
//     console.log(h1)
// }



const container = document.querySelector(".container")
const ps = document.querySelectorAll("p.red")
console.log(ps);
