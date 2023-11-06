
/*var data = [
    {
        id: 1,
        userName: "Ahmed"
    },

    {
        id: 2,
        userName: "Bilal"
    },

    {
        id: 3,
        userName: "Hassan"
    },

    {
        id: 4,
        userName: "Ammar"
    },
];
console.log(data);
*/

// var fetchData = localStorage.getItem("UsersList");
// console.log(fetchData);

// for (var i = 0; i < data.length; i++) {
// console.log(data[i]);
// };

// let
// const

// var user = "ali";
// user = "asad";
// console.log(user);

// const userName
// userName = "bilal";
// console.log(userName);

// let userName = "Tipu";
// userName = "Munawar";
// console.log(userName);

// function difference() {
//     var firstName = "Shahzada";
//     let lastName = "Ahmed";
//     console.log(firstName, lastName);

//     {
//         var anotherFirstName = "Akhter";
//         let anotherLastName = "Khan";
//         console.log(anotherFirstName, anotherLastName);
//     };

//     console.log("First Name: ", anotherFirstName);
//     console.log("Last Name: ", anotherLastName);
// };

// difference();


// function jsFunc(name) {
//     console.log('JS Fuctions!', name);
// };

// jsFunc('ali');



// const newFunction = (name) => {
//     console.log("My name: ", name);
// };

// newFunction("ahmed");


// const errHandler = () => alert("Err found");
// errHandler();


// let firstName = "Shahzada";
// let middleName = "Muhammad";
// let lastName = "Ahmed";
// const fullName = firstName + " " + middleName + " " + lastName;
// const fullName = `${firstName} ${middleName} ${lastName}`;
// console.log(fullName);





let ulEl = document.getElementById("list");
const animals = ["lion", "tiger", "cat", "fox", "mouse"];
// console.log(animals);

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// };


ulEl.innerHTML = animals.map((item, index) => {
    return(
        `<li> ${item} </li>`
    );
}).join("");