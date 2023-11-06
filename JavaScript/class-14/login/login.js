var emailEl = document.getElementById("email");
var passwordEl = document.getElementById("password");

function clearAll() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
};

function logInUser() {
    var user = {
        email: emailEl.value,
        password: passwordEl.value
    };
    // console.log("User: ", user);

    // Note: Fetching data...!
    var fetchData = localStorage.getItem("User");
    if (fetchData) {
        // console.log('Fetched Data: ' , fetchData);
        var dataInJson = JSON.parse(fetchData);
        // console.log(dataInJson);

        if ((dataInJson.userEmail == user.email) && (dataInJson.userPassword == user.password)) {
            alert("Login Successfull!");
            clearAll();
            localStorage.clear();
            setTimeout(() => {
                location = "https://www.google.com";
            }, 3000);
        }

        else if (dataInJson.userEmail != user.email) {
            alert("Email is not registered!");
        }

        else if (dataInJson.userPassword != user.password) {
            alert("Incorrect password!");
        };
    };
};