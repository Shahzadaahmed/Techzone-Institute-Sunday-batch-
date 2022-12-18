// var bulbEl = document.getElementById("bulb");
// var allH3 = document.getElementsByTagName("h3");
// console.log(allH3.length);

// function swapImage() {
//     // console.log(bulbEl);

//     bulbEl.src = "./images/on.gif";
//     // console.log(allH3);
// };


// // console.log(allH3);

// for (var i = 0; i < allH3.length; i++) {
//     // console.log(allH3[i]);

//     allH3[i].style.color = "red";
//     allH3[i].style.textTransform = "uppercase";
// };

// var divEl = document.getElementById("divEl");
// var h3El = document.getElementById("h3");

// console.log(divEl.childNodes[0]);
// console.log(document.childNodes[1]);


// console.log(h3El.parentNode);

// function swapImage() {
// divEl.removeChild(h3El);

// console.log(divEl);
// };


// console.log(h3El.hasAttribute("class"));


// function swapImage() {
//     h3El.setAttribute("class", "h3-tag");

//     console.log(h3El);
// };

var inputEl = document.getElementById("user-input");
var listContainer = document.getElementById("list-container");

function addItem() {
    // Note: Creating li for todo list and its text node and appending in list container...!
    var liEl = document.createElement("li");
    var liTextContent = document.createTextNode(inputEl.value);

    var btnEl = document.createElement("button");
    var btnElInnerContent = document.createTextNode('Delete');
    
    btnEl.appendChild(btnElInnerContent);
    liEl.appendChild(liTextContent);
    liEl.appendChild(btnEl);
    listContainer.appendChild(liEl);

    document.getElementById("user-input").value = "";
    document.getElementById("user-input").focus();
};