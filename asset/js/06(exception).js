//ES6 Person Object 
class Person_ES6 {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    greeting() {
        return `Hello,  ${this.fName} ${this.lName}`;
    }
}

//1. Make Customer class to extend from Person_ES6
class Customer_ES6 extends Person_ES6 {

    constructor(fName, lName) {

        //2. Call the super class [super(fName,lName)]
        super(fName,lName)
    
    }
}

//3. Create Customer ["Jeor", "Mormont"]
const customer_2 = new Customer_ES6()
customer_2.fName = "Jeor"
customer_2.lName = "Mormont"


//4. Display the greeting on Jeor Customer Object [remove the string when you have the object]
es6_proto.innerHTML = customer_2.greeting();

END


//Exception Handling using try catch 
const fitsNo = document.querySelector("#fn");
const secondNo = document.querySelector("#sn");
const res = document.querySelector("#res");
const btn_divide = document.querySelector("#btn_divide");

btn_divide.addEventListener('click', divideNo);



function divideNo() {

    const no1 = parseInt(fitsNo.value)
    const no2 = parseInt(secondNo.value)
    if (fitsNo.value === '' || secondNo.value === '') {
        alert("Enter Numbers");
        return;
    }

    // 1. Define a try block 
    try{    
        const result = performDivision(no1, no2);

        res.innerHTML = result;
    }

    // 2. put this two lines of code inside the try block 
    
    

    //4.Catch the exception and display error message [remove the string when you have the error variable]
   catch(error) {res.innerHTML = "Can Not Divide by zero"};

}




//this function throw exception if denominator is zero
function performDivision(x, y) {
    if (y === 0) {
        throw new Error("Can Not Divide by zero");
    }

    return x / y;
}