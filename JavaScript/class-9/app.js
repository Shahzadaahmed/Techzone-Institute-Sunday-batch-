// function callMyName(name) {
//     console.log(`My name is ${name}`);
// };

// callMyName("ahmed");
// callMyName("kashan");
// callMyName("bilal");




// function addValues(a, b) {
//     var add = Number(a) + Number(b);
//     console.log(add);
// };

// var val1 = prompt("Enter num 1");
// var val2 = prompt("Enter num 2");
// addValues(val1, val2);




// function greetUser(firstName, lastName) {
//     return firstName + " " + lastName;    
// };

// var result = greetUser("Muhammad", "Ahmed");
// console.log(result);


// function resultChecker(percentage) {
//     if (percentage >= 70 && percentage <= 80) {
//         return "A Grade!";
//     }

//     if (percentage > 80) {
//         return " A+1 Grade!";
//     }

//     return "Fail";
// };

// let output = resultChecker(85);
// console.log(output);




// function squareRootHandler(num) {
//     return num * num;
// };

// var result = squareRootHandler(5);
// console.log(result);


// function testing(val, squareVal) {
//     console.log("Val: ", val);
//     console.log("Square Val: ", squareVal(val))
// };


// testing(4, squareRootHandler);


// function btnHandler() {
//     alert('Function it running!');
// };

// Solve equation (a - b)2 = a2 - 2ab + b2...!

// function squareRootHandler(num) {
//     return num * num;
// };

// function solveEquation(a, b, squareHandler) {

//     var equation = squareHandler(a) - (2 * a * b) + squareHandler(b);
//     return equation;
// };

// var result = solveEquation(6, 2, squareRootHandler);
// console.log(result);



// var myName = "Shahzada Ali";

// function callUser(name) {
//     // console.log(name, myName);

//     var comingUser = name;
//     console.log(comingUser);
// };


// callUser("ahmed");

// console.log(comingUser);




// function squareRootHandler(num) {
//     return num * num;
// };

// function solveEquation(a, b) {

//     var equation = squareRootHandler(a) - (2 * a * b) + squareRootHandler(b);
//     return equation;
// };

// var result = solveEquation(6, 2);
// console.log(result);

// console.log(equation);



// var imgEl = document.getElementById("bulb-img");
// console.log(imgEl);

// function mounseOverHandler() {
//     // console.log("Mouse is on image!");
//     imgEl.src = "./images/on.gif";
// };



// function mounseOutHandler() {
//     // console.log("Mouse is not on image!");
//     imgEl.src = "./images/off.gif";
// };


// var h1 = document.getElementsByTagName("h1");
// console.log(h1);


var h1Class = document.getElementsByClassName("header");
console.log(h1Class);