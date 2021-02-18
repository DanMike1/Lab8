//DOM Load 
document.addEventListener('DOMContentLoaded', () => {

    arrayDestructuring();
    objectDestructuring();
    spreadSyntax();
    restSyntax();




});

function arrayDestructuring() {

    // we have an array with the name and surname
    let arr = ["Margaery", "Tyrell"]

    //1. Destructor this array to firstName and lastName
    let [firstName, lastName] = ["Margaery", "Tyrell" ]

    //2. Display it  [Replace it with ${firstName} ${lastName} once you have the variables]
    des_arr.innerHTML = `Hello , I am ${firstName} ${lastName} `


    // we have an array with the name and surname
    let str = "Margaery Tyrell"

    //1. Destructor this string array to firstName and lastName by using split() method of string object
    let [firstNames, lastNames] = str.split(" ");

    //2. Display it [Replace it with ${firstName} ${lastName} once you have the variables]
    des_string.innerHTML = `Hello , I am ${firstNames} ${lastNames} `





}

function objectDestructuring() {

    // we have a person  with the fname and surname
    let person = { firstName: "John", lastName: "Smith" }

    //1. Destructor this object to firstName and lastName 
    let{ firstName, lastName } = { firstName: "John", lastName: "Smith" }

    //2. Display it [Replace it with ${firstName} ${lastName} once you have the variables]
    des_obj1.innerHTML = `Hi , I am ${firstName} ${lastName} `


    //1. Destructor this object to fName and sName [different naming]
    let{ Name, lName } = { Name: "Aria", lName: "Stark" }
    //2. Display it [Replace it with ${Name} ${lName} once you have the variables]
    des_obj2.innerHTML = `Hi , I am ${Name} ${lName} `


}

function spreadSyntax() {

    //An array of Numbers to add 
    const arr = [1, 2, 3, 4]

    //1. Pass the array using spread syntax 
    const results = sum1(...arr);
    

    //Display it 
    spread_syntax.innerHTML = `The Sum is : ${results} `





}

function restSyntax(x1,x2,...arr2) {



    //Make the function to support rest so that it can add 5 numbers
    var x1 = 1
    var x2 = 1
    var x3 = 1
    var x4 = 1
    var x5 = 1
    //Display it 
    const result = sum2(x1,x2,...arr)
    
    rest_syntax.innerHTML = `The Sum is : ${result} `


}
//Function that add 4 numbers 
function sum1(x1, x2, x3, x4) {

    return x1 + x2 + x3 + x4;

}


// const arr2 = [1, 2, 3, 4]
//3. Make this function to support rest, and add 5 numbers
 const arr = [1, 2,3,4]

function sum2(x1, x2, ...arr) {

    //4. Function that add 5 numbers [Consider Adding the arr2[0], arr2[1], arr2[2]]
    result= x1 + x2 + arr[0] + arr[1] + arr[2]+arr[3]
    return result;

}

