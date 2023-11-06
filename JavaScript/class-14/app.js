var nameEl = document.getElementById("name");
var contactNumEl = document.getElementById("contact-num");
var emailEl = document.getElementById("email");
var passwordEl = document.getElementById("password");
// var anchorEl = document.getElementById("a-tag");

function clearAll() {
    document.getElementById("name").value = "";
    document.getElementById("contact-num").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
};

function signUpUser() {
    var userData = {
        userName: nameEl.value,
        userContactNum: contactNumEl.value,
        userEmail: emailEl.value,
        userPassword: passwordEl.value
    };

    console.log("User: ", userData);

    if (userData) {
        let dataInStr = JSON.stringify(userData);
        // console.log("String Data: " , dataInStr);
        localStorage.setItem("User", dataInStr);
        clearAll();
        location = "./login/login.html";
    };
};