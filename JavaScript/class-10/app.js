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