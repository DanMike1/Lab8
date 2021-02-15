//DOM Load 
document.addEventListener('DOMContentLoaded', () => {


    arrow_full.innerHTML = `The Sum is :  ${arrowFun1(1,2)}`;
    arrow_red1.innerHTML = `The Sum is :  ${arrowFun2(1,2)}`;
    arrow_red2.innerHTML = `The Sqrt is :  ${arrowFun3(4)}`;



})

//1. Replace the empty string with arrow function 

//2. An arrow function with full syntax

let  arrowFun1 = (a, b) => {  let result = a + b;  return result;  }

//3. A minimized arrow function [No return statement , no curly brace]
let  arrowFun2 = (a, b) => a + b;

//4. A minimized arrow function [No return statement , no curly brace, no square bracket]

//5. The function will return the sqrt , use Math.sqrt(var);
let  arrowFun3 = a => Math.sqrt(a);