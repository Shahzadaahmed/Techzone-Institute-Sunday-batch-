// let firstPromise = new Promise((resolve, reject) => {
//     let num = 3;

//     if (num % 2 == 0) {
//         resolve("Promise resolved!");
//     }

//     else {
//         reject("Promise rejected!");
//     }
// });

// firstPromise
//     .then((success) => {
//         console.log(success);
//     })
//     .catch((err) => {
//         console.log("Error in first promise: ", err);
//     });



// const apiCall = () => {
//     let apiUrl = "https://jsonplaceholder.typicode.com/photos";
//     // console.log(apiUrl);

//     fetch(apiUrl)
//         .then((success) => {
//             // console.log(success.json());
//             return success.json();
//         })
//         .then((actualData) => {
//             console.log(actualData);
//         })
//         .catch((err) => {
//             console.log("Error in api integration: ", err);
//         })
// };

// apiCall();


// let userInput = prompt("Enter your name?");

// try {
//     if (userInput == "ahmed") {
//         console.log('Valid Name!');
//     }

//     else if ( userInput == "abc" ) {
//         throw "Invalid Name!";
//     }

//     else if ( userInput == "xyz" ) {
//         throw "Incorrect Name!";
//     }

//     else {
//         throw "Incorrect data!";
//     }
// }

// catch (err) {
//     console.log("Error: ", err);
// };



// const apiCall = async () => {
//     try {
//         let apiUrl = "https://jsonplaceholder.typicode.com/users";
//         // console.log(apiUrl);

//         let res = await fetch(apiUrl);
//         // let dataInJson = await res.json();
//         console.log(res);
//     }

//     catch (err) {
//         console.log("Err in api integration: ", err);
//     };
// };

// apiCall();



const apiCall = () => {
    try {
        let apiUrl = "https://web-production-32e4.up.railway.app/api/fetch/cities-list";
        // console.log(apiUrl);

        fetch(apiUrl)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    }

    catch (err) {
        console.log("Err in api integration: ", err);
    };
};

apiCall();