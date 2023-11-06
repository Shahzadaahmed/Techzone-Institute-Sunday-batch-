/*
let tableEl = document.getElementById("table");
// console.log(tableEl);

const apiCall = async () => {
    let apiUrl = "https://jsonplaceholder.typicode.com/users";
    // console.log(apiUrl);

    try {
        let response = await fetch(apiUrl);
        let actualData = await response.json();
        // console.log(actualData);
        // console.table(actualData);

        if (actualData.length > 0) {
            tableEl.innerHTML = actualData.map((item, index) => {
                // console.log(item);

                return (
                    `
                    <tr>
                        <td> ${item.id} </td>
                        <td> ${item.name} </td>
                        <td> ${item.email} </td>
                    </tr>
                    `
                );
            }).join(" ");
        };
    }

    catch (error) {
        console.log("Error while api integration: ", error);
    };
};

apiCall();
*/

// let str = "muneeb";
// let strToArr = str.split("");
// // console.log(strToArr);

// strToArr.map((e) => {
//     console.log(e);
// });


// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// };



// let techArr = ["google", "microsoft", "facebook", "amazon", "apple"];
// console.log(techArr);

// for (let key in techArr) {
//     console.log(key);
// };




// for (let el of techArr) {
//     console.log(el);
// };


// let inputEl = document.getElementById("user-input");
// let btnEl = document.getElementById("btn");

// btnEl.addEventListener("click", () => {
//     console.log(inputEl.value);
//     document.getElementById("user-input").value = "";
//     document.getElementById("user-input").focus();
// });



// inputEl.addEventListener("keypress", (e) => {
//     // console.log(e);

//     if (e.key == "Enter") {
//         console.log(inputEl.value);
//         document.getElementById("user-input").value = "";
//         document.getElementById("user-input").focus();
//     };
// });


// const test = () => console.log('Content loaded successfully!');
// window.addEventListener("load", test);



// let techArr = ["google", "microsoft", "facebook", "amazon", "apple"];

// techArr.forEach((el) => {
//     console.log(el);
// });



// console.log(navigator);


// let user = prompt("Enter your name!").toLowerCase();

// switch (user) {
//     case "muhammad":
//         console.log(`${user} is the first name!`);
//         break;

//     case "ahmed":
//         console.log(`${user} is the last name!`);
//         break;

//     default:
//         console.log('Invalid name!');
// };

// let [
//     inputEl,
//     addBtnEl,
//     deleteAllBtnEl,
//     ulEl
// ] = [
//         document.getElementById("todo"),
//         document.getElementById("add"),
//         document.getElementById("delete-all"),
//         document.getElementById("list"),
//     ];

// deleteAllBtnEl.disabled = true;

// const addItem = () => {
//     if (ulEl.children.length == 0) {
//         deleteAllBtnEl.disabled = false;
//     };

//     let li = document.createElement("li");
//     let dateTag = document.createElement("span");

//     let liText = document.createTextNode(inputEl.value);
//     let dateText = document.createTextNode(new Date().toLocaleTimeString());

//     li.appendChild(liText);
//     dateTag.appendChild(dateText);
//     li.appendChild(dateTag);
//     ulEl.appendChild(li);

//     document.getElementById("todo").value = "";
//     document.getElementById("todo").focus();

//     console.log(ulEl.children);
// }

// const deleteAll = () => {
//     ulEl.innerHTML = "";
//     deleteAllBtnEl.disabled = true;
// }


// let url = window.location.href;
// console.log(url);

/*
todolist
bidding app
sign up login
image slider
api integration
*/



// setInterval(() => {
//     console.log('ahmed');
// } , 1000);


let spanEl = document.getElementById("span-tag");
// console.log(spanEl);

let defaultFontSize = spanEl.style.fontSize;
// console.log(defaultFontSize);

// let fSize = defaultFontSize.replace("px", "");
// console.log(fSize);

let fSize = defaultFontSize.match(/\d/g).join("");
// console.log(fSize);

const increaseFontSize = () => {
    fSize++;
    console.log(fSize);

    spanEl.style.fontSize = `${fSize}px`;
};

// setInterval(increaseFontSize, 1000);