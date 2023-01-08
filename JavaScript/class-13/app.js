// var lastSpanEl = document.getElementById("last-span");
// console.log(lastSpanEl.previousSibling.previousSibling.previousSibling.nodeValue);


// Todo List in JS!

var inputEl = document.getElementById("user-input");
var addBtnEl = document.getElementById("add-btn");
var ul = document.getElementById("container");
var targetBtn;

// Note: Fuction to delete all items...!
function deleteAll() {
    ul.innerHTML = "";
};

// Note: Fuction to delete an item...!
function deleteItem(el) {
    // console.log(el);

    var targetEl = el.parentNode;
    ul.removeChild(targetEl);
};

// Note: Fuction to update an item...!
function updateItem() {
    // console.log(inputEl.value);
    // console.log(targetBtn);

    targetBtn.previousSibling.previousSibling.nodeValue = inputEl.value;
    addBtnEl.innerHTML = "Add Item";
    addBtnEl.setAttribute("onclick", "addItem()");
    document.getElementById("user-input").value = "";
};

// Note: Fuction to edit an item...!
function editItem(el) {
    // console.log(el);

    targetBtn = el;
    var previousVal = el.previousSibling.previousSibling.nodeValue;
    inputEl.value = previousVal;
    addBtnEl.innerHTML = "Update Item";
    addBtnEl.setAttribute("onclick", "updateItem()");
};

// Note: Fuction to add an item...!
function addItem() {
    var liEl = document.createElement("li");
    var delBtnEl = document.createElement("button");
    var editBtnEl = document.createElement("button");

    var liText = document.createTextNode(inputEl.value);
    var delBtnText = document.createTextNode("Delete Item");
    var editBtnText = document.createTextNode("Edit Item");

    delBtnEl.setAttribute("onclick", "deleteItem(this)");
    editBtnEl.setAttribute("onclick", "editItem(this)");

    delBtnEl.appendChild(delBtnText);
    editBtnEl.appendChild(editBtnText);
    liEl.appendChild(liText);
    liEl.appendChild(delBtnEl);
    liEl.appendChild(editBtnEl);
    ul.appendChild(liEl);

    document.getElementById("user-input").value = "";
    document.getElementById("user-input").focus();
};