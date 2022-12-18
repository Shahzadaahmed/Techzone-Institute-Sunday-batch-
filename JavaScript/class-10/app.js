/*
var christmas = "25 December 2022";
var christmasDate = new Date(christmas);
// console.log(christmasDate);

var rigtNow = new Date();
// console.log(rigtNow);

// NOte: Converting both dates in mili seconds...!
var rigtNowInMS = rigtNow.getTime();
var christmasDateInMS = christmasDate.getTime();

// console.log(rigtNowInMS);
// console.log(christmasDateInMS);

// Note: Calculate mili seconds...!
var calculateMS = christmasDateInMS - rigtNowInMS;
// console.log(calculateMS);

// Note: Applying days formula...!
var daysFormula = calculateMS / (1000 * 60 * 60 * 24);
daysFormula = Math.ceil(daysFormula);
console.log(daysFormula);
*/

// var valueOne = 16;
// var valueTwo = 12.37982;
// var valueThree = -9.3079499;


// console.log(valueOne.toFixed(1));
// console.log(valueTwo.toFixed(2));
// console.log(valueThree.toFixed(4));


// var numInput = 666;
// var numInput = 12345;
// // console.log(numInput);

// var numInputLength = String(numInput).length;
// // console.log(numInputLength);

// var splitNums = numInput.toString().split("");
// // console.log(splitsNums);


// var count = 0;
// for (var i = 0; i < splitNums.length; i++) {
//     // console.log(splitNums[i]);

//     count = count + Number(splitNums[i]);
// };

// console.log(count);

// console.log(count / numInputLength);

var firstNameEl = document.getElementById("firstName");
var lastNameEl = document.getElementById("lastName");
var dobEl = document.getElementById("dob");
var showFirstName = document.getElementById("showFirstName");
var showLastName = document.getElementById("showLastName");
var showDob = document.getElementById("showDob");
var btnEl = document.getElementById("btn");

function clearAll() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dob").value = "";
};

function submitData() {
    if (firstNameEl.value.trim().length < 1 || lastNameEl.value.trim().length < 1 || !dobEl.value) {
        alert("Kch likho!");
    }

    else {
        // console.log("First Name: ", firstNameEl.value);
        // console.log(`Last Name:  ${lastNameEl.value}`);
        // console.log(`D.O.B:  ${dobEl.value}`);

        showFirstName.innerHTML = firstNameEl.value;
        showLastName.innerHTML = lastNameEl.value;
        showDob.innerHTML = dobEl.value;
        clearAll();
        btnEl.disabled = true;
    };
};


// var trimVal = "      ahmed ";
// console.log(trimVal.trim(), trimVal.trim().length);