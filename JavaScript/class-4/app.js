// Note: Array Programs...!

// Q: 1, 2
// var arr = [];
// console.log(arr);



// Q: 3
// var stringArr = ["ahmed", "mehran", "kashan", "shahzaib", "khurram"];
// console.log(stringArr);



// Q: 4
// var numbersArr = [1, 2, 3, 4, 5];
// console.log(numbersArr);



// Q: 5
// var boolArr = [false, true];
// console.log(boolArr);



// Q: 6
// var mixedArr = ["ahmed", true, "1996", undefined, 8, "john", "", 10, 0, false];
// console.log(mixedArr);



// Q: 7
// var networksArr = [];
// networksArr[0] = "zong";
// networksArr[1] = "jazz";
// networksArr[2] = "telenor";
// networksArr[3] = "ufone";
// networksArr[4] = "warid";

// console.log(networksArr);



// Q: 8
/*
var qualificationsArr = [];
qualificationsArr[0] = "SSC";
qualificationsArr[1] = "HSC";
qualificationsArr[2] = "BCS";
qualificationsArr[3] = "BS";
qualificationsArr[4] = "BCOM";
qualificationsArr[5] = "MS";
qualificationsArr[6] = "M.Phil";
qualificationsArr[7] = "PhD";

console.log(qualificationsArr);

document.write("Qualifications: <br />");
document.write("1 ", qualificationsArr[0], "<br />");
document.write("2 ", qualificationsArr[1], "<br />");
document.write("3 ", qualificationsArr[2], "<br />");
document.write("4 ", qualificationsArr[3], "<br />");
document.write("5 ", qualificationsArr[4], "<br />");
document.write("6 ", qualificationsArr[5], "<br />");
document.write("7 ", qualificationsArr[6], "<br />");
document.write("8 ", qualificationsArr[7], "<br />");
*/



// Q: 9
/*
var moviesArr = [];
moviesArr.push("Avengers: Age of Ultron");
moviesArr.push("Spectre");
moviesArr.push("Jurrasic World");
moviesArr.push("Inside Out");

// console.log(moviesArr);

document.write("Top movies of 2015 <br />");
document.write("1 ", moviesArr[0], "<br />");
document.write("2 ", moviesArr[1], "<br />");
document.write("3 ", moviesArr[2], "<br />");
document.write("4 ", moviesArr[3], "<br />");
document.write("Length of the array: ", moviesArr.length);
*/



// Q: 10
/*
var carsArr = ["Audi", "Volvo", "Ford", "Lamborghini"];
console.log(carsArr);

console.log("First index of the array: ", carsArr.indexOf(carsArr[0]));
console.log("Car at first index of the array: ", carsArr[0]);
console.log("First index of the array: ", carsArr.indexOf(carsArr[3]));
console.log("Car at first index of the array: ", carsArr[3]);
*/



// var dummyArr = ['a', 'b', 'c', 'b', 'd', 'b'];
// console.log(dummyArr);
// // console.log(dummyArr.indexOf('b'));
// console.log(dummyArr.lastIndexOf('b'));



// Q: 11
/*
var studentsArr = ["Michael", "John", "Tony"];
var marksArr = [320, 230, 480];
var totalMarks = 500;

console.log("Score of", studentsArr[0], "is", marksArr[0], ". Percentage:", ((marksArr[0] * 100) / totalMarks), "%");
console.log("Score of", studentsArr[1], "is", marksArr[1], ". Percentage:", ((marksArr[1] * 100) / totalMarks), "%");
console.log("Score of", studentsArr[2], "is", marksArr[2], ". Percentage:", ((marksArr[2] * 100) / totalMarks), "%");
*/



// Q: 12
/*
var colorsArr = ["red", "green", "blue"];

// a:
var userInput_1 = prompt("What color do you want to add to the begining of an array!");
colorsArr.unshift(userInput_1);

// b:
var userInput_2 = prompt("What color do you want to add to the end of an array!");
colorsArr.push(userInput_2);

// c:
colorsArr.unshift("yellow", "pink");

// d:
colorsArr.shift();

// e:
colorsArr.pop();

// f:
var userInput_3 = prompt("Which index?");
var userInput_4 = prompt("Which color?");
colorsArr.splice(userInput_3, 0, userInput_4);

// g:
var userInput_5 = prompt("From where to delete");
var userInput_6 = prompt("How many colors do you want to delete?");
colorsArr.splice(userInput_5, userInput_6);

console.log(colorsArr);
*/



// Q: 13
/*
var studentsScoresArr = [320, 230, 480, 120];
// var studentsScoresArr = [1, 320, 2, 230, 480, 120];
console.log(studentsScoresArr);
console.log(studentsScoresArr.sort());
*/



// Q: 14
/*
var fruitsArr = ["strawberry", "apple", "orange", "banana"];
console.log(fruitsArr);
console.log(fruitsArr.sort());
*/



// Q: 15
/*
var citiesArr = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
console.log(citiesArr);

var selectedCities = citiesArr.slice(2, 4);
console.log(selectedCities);
*/



// Q: 16
/*
var arr = ["This", "is", "my", "cat"];
console.log("Array: ", arr);

var arrToStr = arr.join(" ");
console.log("String: ", arrToStr);
*/



// Q: 17
/*
var itemsArr = ["keyboard", "mouse", "printer", "monitor"];
console.log(itemsArr);

itemsArr.pop();
itemsArr.pop();
itemsArr.pop();
itemsArr.pop();

console.log(itemsArr);
*/



// Q: 20
// var multidimensionalArr = [[], [], []];
// console.log(multidimensionalArr);



// Q: 22
// var multidimensionalArr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// console.log(multidimensionalArr);
// console.log(multidimensionalArr[0][2]);



// Q: 19
var devicesArr = ["Apple", "Samsung", "Motorola", "Nokia"];
console.log(devicesArr);

document.write(`
<select>
 <option> ${devicesArr[0]} </option>
 <option> ${devicesArr[1]} </option>
 <option> ${devicesArr[2]} </option>
 <option> ${devicesArr[3]} </option>
</select>
`);


















// var studentsArr = ["Michael", "John", "Tony"];
// var marksArr = [320, 230, 480];
// var totalMarks = 500;

// console.log("Score of", studentsArr[0], "is", marksArr[0], ". Percentage:", ((marksArr[0] * 100) / totalMarks), "%");
// console.log(`Score of ${studentsArr[1]} is ${marksArr[0]}. Percentage: ${((marksArr[0] * 100) / totalMarks)}%`);