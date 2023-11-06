// let decimalVal = 12.123;
// decimalVal = Math.floor(decimalVal);
// console.log(decimalVal);



// let decimalVal = 12.123;
// console.log(~~decimalVal);


// let myName = "ahmed";
// let title = "Engineer";
// let company = "10 Pearls";

// let firstName, lastName;

// let [myName, title, company] = ["ahmed", "Engineer", "10 Pearls"];
// console.log(myName, title, company);

// const func1 = (name, func2Handler) => {
//     console.log(`My name is ${name}`);

//     if (name != "") {
//         func2Handler(name);
//     };
// };

// const func2 = (myName) => {
//     console.log(`The person name is ${myName}`);
// };

// func1("ahmed", func2);


// let h1El = document.getElementById("h1");
// console.log(h1El);


// setTimeout(() => {
//     h1El.style.color = "blue";
// }, 3000);

/*
console.log('run 1');

setTimeout(() => {
    console.log('run 2');
}, 2000);

console.log('run 3');

setTimeout(() => {
    console.log('run 4');
}, 0);

setTimeout(() => {
    console.log('run 5');
}, 1500);
*/


// console.log(a);
// console.log(b);

// var a = "abc";
// let b = "xyz";


// let num = 2;
// num++;
// console.log(num);



// console.log('run 1', num);

// setTimeout(() => {
//     console.log(`run 2: num ${num}`);
// }, 3000);

// function test() { console.log('run 3', num) };

// setTimeout(() => {
//     console.log(`run 4`);
//     num++;
//     test();
// }, 10);

// setTimeout(() => {
//     console.log(`run 5 num ${num}`)
// }, 0);

// let num;

/*
let learningPromise = new Promise((resolve, reject) => {
    let userInput = prompt('Enter any number!');

    if (userInput % 2 == 0) {
        resolve("Promise resolved!");
    }

    else {
        reject("Promise rejected!");
    }
});

learningPromise
    .then((success) => {
        console.log(success);
    })
    .catch((err) => {
        console.log(err);
    });
    */

let ulEl = document.getElementById("list");

const apiCall = () => {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";
    // console.log(apiUrl);

    fetch(apiUrl)
        .then((res) => { // data success lekin readable nai h
            // console.log(res.json());
            return res.json();
        })
        .then((ahmedData) => {
            // console.log(ahmedData);

            if (ahmedData.length > 0) {
                ulEl.innerHTML = ahmedData.map((item, index) => {
                    console.log(item , index);

                    return (
                        `<li> ${item.name} </li>`
                    );
                });
            };
        })
        .catch((err) => {
            console.log(`Error in api integration: ${err}`);
        });
};

apiCall();