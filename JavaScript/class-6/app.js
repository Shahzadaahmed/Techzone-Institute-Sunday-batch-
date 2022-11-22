// Note: For loop questions...!

// Q:1 Solution:

// var message = "Hello World";

// for (var i = 0; i < 5; i++) {
//     // console.log(message);
//     document.write(i + 1 + " " + message, "<br />");
// };



// Q:2 Solution:

// for ( var i = 1; i <= 10; i++ ) {
//     console.log(i);
// };



// Q:3 Solution:

// var whichTable = prompt('Enter the number of the table you want to print!');
// var tableLength = prompt('What should be the length of the table!');

// for (var i = 1; i <= tableLength; i++) {
//     console.log(`${whichTable} x ${i} = ${whichTable * i}`);
// };



// Q:4 Solution:

// var arr = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// // console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };



// Q:5 Solution:

// var items = ["apple", "banana", "mango", "orange", "strawberry"];
// // console.log(items);

// for (var i = 0; i < items.length; i++) {
//     console.log(items[i]);
//     console.log(`Element at index ${i} is ${items[i]}`);
// };



// Q:6 Solution:

// var noOfItems = prompt('Enter the number of items');
// // console.log(noOfItems);
// var userInput;
// var arr = [];

// for (var i = 0; i < noOfItems; i++) {
//     userInput = prompt(`Enter value for index ${i}`);
//     arr.push(userInput);
// };

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };



// Q:7 Solution:
// a:

// for (var i = 1; i <= 15; i++) { console.log(i) };

// b:

// for (var i = 10; i >= 1; i--) { console.log(i) };

// c:
// for (var i = 0; i <= 20; i++) {
//     console.log(i);

//     if (i % 2 == 0) {
//         console.log(i);
//     };
// };

// d:
// for (var i = 0; i <= 20; i++) {
//     // console.log(i);

//     if (i % 2 != 0) {
//         console.log(i);
//     };
// };



// Q:8 Solution:
/*
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("What do you want to order?");
var itemFound = false;
var item, itemIndex;

for (var i = 0; i < bakeryItems.length; i++) {
    // console.log(bakeryItems[i]);

    if (userInput == bakeryItems[i]) {
        itemFound = true;
        item = bakeryItems[i];
        itemIndex = i;
        break;
    };
};

if (itemFound) {
    console.log(`${item} is available at index ${itemIndex} in our bakery!`);
}

else {
    console.log(`We are sorry! ${userInput} is not available in our bakery!`);
}
*/



// Q:9 Solution:
/*
var numsArr = [24, 53, 78, 91, 12, 505, 1];
var foundLargestNum = 0;

for (var i = 0; i < numsArr.length; i++) {
    // console.log(numsArr[i]);

    if (numsArr[i] > foundLargestNum) {
        foundLargestNum = numsArr[i];
    };
};

console.log(`Largest number is ${foundLargestNum}`);
*/



// Q:10 Solution:
/*
var numsArr = [24, 53, 78, 91, 12, 505, 1];
var foundSmallestNum = 2;
// console.log(foundSmallestNum);

for (var i = 0; i < numsArr.length; i++) {
    // console.log(numsArr[i]);

    if (numsArr[i] < foundSmallestNum) {
        foundSmallestNum = numsArr[i];
    };
};

console.log(`Smallest number is ${foundSmallestNum}`);
*/



// Q:12 Solution:

// for (var i = 5; i <= 100; i++) {
//     // console.log(i);

//     if (i % 5 == 0) {
//         console.log(i);
//     };
// };



// Q:14 Solution:
/*
var scoresArr = [12, 45, 3, 22, 34, 50];
var userInput = prompt("Enter stop point");
var itemFound = false;
var targetIndex;

for (var i = 0; i < scoresArr.length; i++) {
    // console.log(scoresArr[i]);

    if (userInput == scoresArr[i]) {
        itemFound = true;
        targetIndex = i;
        break;
    };
};

if (itemFound) {
    console.log(scoresArr.slice(0, targetIndex + 1));
}

else {
    console.log('Number not found in the iven array!');
};
*/



// Q:15 Solution:

// var arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// // console.log(arr);

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// };



// Q:16 Solution:

// var userInput = 5;
// // var userInput = Number(prompt('Enter any number!'));

// for (var i = userInput; i >= 0; i = i - 0.5) {
//     // console.log(i - 0.5);
//     console.log(i);
// };



// Q:17 Solution:

// for (var i = 0; i <= 20; i++) {
//     // console.log(i);

//     if (i % 2 == 0) {
//         console.log(`${i} is Even`);
//     }

//     else {
//         console.log(`${i} is Odd`);
//     };
// };



// Q:18 Solution:
// var initialPoint = 1;

// for (var i = 1; i <= 7; i++) {
//     // console.log(i);

//     if (i % 2 != 0) {
//         // console.log(i);
//         initialPoint = initialPoint * i;
//     };
// };

// console.log(initialPoint);



// Q: 19, 20 Solution:
// a:

// var strPattrenA = "*****";

// for (var i = 0; i < 5; i++) {
// document.write(strPattrenA, "<br>");
// document.write(`<h1> ${strPattrenA} </h1>`);
// };



// c:

// var strPattrenC = "*****";
// var starLength = strPattrenC.length;

// // console.log(strPattrenC);
// // console.log(starLength);

// for (var i = starLength - 1; i >= 0; i--) {
//     // console.log(i);
//     document.write(strPattrenC, "<br />");
//     strPattrenC = strPattrenC.slice(0, strPattrenC.length - 1);
// };



// b:
// var strPattrenB = "*";
// var starLength = strPattrenB.length;

// for (var i = 0; i < 5; i++) {
//     // console.log(i);
//     document.write(strPattrenB, "<br />");
//     strPattrenB = strPattrenB + "*";
// };


// Note: Last important question...!

for (var i = 1; i <= 3; i++) {
    // console.log("i", i);

    for (var j = 1; j <= 3; j++) {
        // console.log("j", j);

        var k = i * j;
        console.log("k", k);
    };
};