// Note: Login component...!

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [formStates, setFormStates] = useState({
        email: '',
        password: '',
        usersList: []
    });

    // Note: Component did mount...!
    useEffect(() => {
        if (localStorage.getItem("Users") != null) {
            let fetchUsers = localStorage.getItem("Users");
            fetchUsers = JSON.parse(fetchUsers);
            // console.log("Users: ", fetchUsers);

            if (fetchUsers && fetchUsers.length > 0) {
                setFormStates({
                    ...formStates,
                    usersList: fetchUsers
                });
            };
        }

        else {
            localStorage.setItem("Users", JSON.stringify([]));
        }
    }, []);

    const navigate = useNavigate();

    const logInUser = () => {

        console.log(formStates);

        let user = null;
        let message;

        for (let i = 0; i < formStates.usersList.length; i++) {
            // console.log(formStates.usersList[i]);

            if (
                formStates.email == formStates.usersList[i].email &&
                formStates.password == formStates.usersList[i].password
            ) {
                user = formStates.usersList[i];
                message = "You have logged in successfully!";
                break;
            }

            else if (
                (formStates.email == formStates.usersList[i].email) &&
                (formStates.password != formStates.usersList[i].password)
            ) {
                message = "Incorrect Password!";
                break
            }

            else if (
                formStates.email != formStates.usersList[i].email &&
                formStates.password != formStates.usersList[i].password
            ) {
                message = "Incorrect Email or Password!";
            };
        };

        if (user != null && message == "You have logged in successfully!") {
            console.log("You have logged in successfully!");
            console.log("User: ", user);
            localStorage.setItem("AuthenticatedUser", JSON.stringify(user));
            window.location.reload();

            setFormStates({
                ...formStates,
                email: "",
                password: ""
            });
        };
    };

    return (
        <>
            <h1> Login Screen! </h1>

            <div>
                <label>
                    Email:
                    <input
                        type='email'
                        placeholder='abc@xyz.com'
                        value={formStates.email}
                        onChange={(e) => setFormStates({ ...formStates, email: e.target.value })}
                    />
                </label> <br />

                <label>
                    Password:
                    <input
                        type='password'
                        placeholder='*****'
                        value={formStates.password}
                        onChange={(e) => setFormStates({ ...formStates, password: e.target.value })}
                    />
                </label> <br />

                <button onClick={logInUser}>
                    Login User
                </button>

                <button onClick={() => navigate("signup")}>
                    Create an account
                </button>
            </div>
        </>
    );
};

export default Login;