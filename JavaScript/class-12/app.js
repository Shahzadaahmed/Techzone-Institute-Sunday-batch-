// Note: Bidding App...!

var bidNoEl = document.getElementById("bid-no-value");
var bidAmountEl = document.getElementById("bid-amount-value");
var coinsEl = document.getElementById("coins");
var showMessageEl = document.getElementById("show-message");
var showUserBidNoEl = document.getElementById("show-bid-no");
var showDiceNoEl = document.getElementById("show-dice-no");
var btnEl = document.getElementById("btn");
var diceBoxEl = document.getElementById("diceBox");
// console.log(diceBoxEl); // Testing purpose only...!

var totalCoins = 1000;
diceBoxEl.style.display = "none";
coinsEl.innerHTML = totalCoins;

function clearForm() {
    document.getElementById("bid-no-value").value = "";
    document.getElementById("bid-amount-value").value = "";
};

// Note: Function to check valid bid no...!
function aceptableBidNo() {
    if (bidNoEl.value >= 1 && bidNoEl.value <= 6) {
        return true;
    }

    else {
        // console.log('Bid No should not less than 1 or greater than 6!');
        return false;
    };
};

// Note: Function to check valid bid amount...!
function acceptableAmount() {
    if (bidAmountEl.value >= 1 && bidAmountEl.value <= 500) {
        return true;
    }

    else {
        return false;
        // console.log('Bid Amount should not less than 1 or greater than 500!');
    };
};

// Note: FUnction to generate dice...!
function generateDice() { return Math.ceil(Math.random() * 5) };

// Note: Function to show bid result...!
function isBidMatched(diceValue) {
    if (diceValue == Number(bidNoEl.value)) {
        return true;
    }

    else {
        return false;
    };
};

// Note: Function to play game...!
function playGame() {
    if (aceptableBidNo()) {
        if (acceptableAmount()) {
            var dice = generateDice();

            var customUrl = `./images/Dice${dice}.png`;
            diceBoxEl.style.display = "block";
            diceBoxEl.src = customUrl;

            showUserBidNoEl.innerHTML = bidNoEl.value;
            showDiceNoEl.innerHTML = dice;

            if (isBidMatched(dice)) {
                // Note: Calculation for adding coins...!
                showMessageEl.innerHTML = "Congratulation! you won the bid!";
                totalCoins = totalCoins + Number(bidAmountEl.value);
                coinsEl.innerHTML = totalCoins;
            }

            else {
                // Note: Calculation for subtracting coins...!
                showMessageEl.innerHTML = "Sorry! you loss the bid!";
                totalCoins = totalCoins - Number(bidAmountEl.value);
                coinsEl.innerHTML = totalCoins;
                // console.log(totalCoins);

                if (totalCoins == 0 || totalCoins < 1) {
                    btnEl.disabled = true;
                    showMessageEl.innerHTML = "Game Over!";
                    clearForm();
                };
            };
        }

        else {
            alert("Bid Amount should not less than 1 or greater than 500!");
        };
    }

    else {
        alert("Bid No should not less than 1 or greater than 6!");
    };
};












// function sqRoot(num) {
//     return num * num;
// };
 
// var result = sqRoot(2);
// console.log(result);