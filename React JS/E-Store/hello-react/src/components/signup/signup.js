// Note: SignUp component...!

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formStates, setFormStates] = useState({
        name: '',
        email: '',
        password: '',
        usersList: []
    });

    const navigate = useNavigate();

    // Note: Function to create user...!
    const createUser = () => {
        let userObj = {
            name: formStates.name,
            email: formStates.email,
            password: formStates.password
        };

        let userListClone = formStates.usersList.slice(0);
        let duplicateUserFound = false;

        for (let i = 0; i < userListClone.length; i++) {
            // console.log(userListClone[i]);

            if (userListClone[i].email == formStates.email) {
                duplicateUserFound = true;
                break;
            };
        };

        if (duplicateUserFound) {
            alert("Error: Duplicate User Found! ⚠️");
        }

        else {
            userListClone.push(userObj);

            setFormStates({
                ...formStates,
                usersList: userListClone,
                name: "",
                email: "",
                password: ""
            });
        };
    };

    // Note: Component did mount...!
    useEffect(() => {
        if (localStorage.getItem("Users") != null) {
            let fetchUsers = localStorage.getItem("Users");
            fetchUsers = JSON.parse(fetchUsers);
            // console.log("Users: ", fetchUsers);

            if (fetchUsers) {
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

    // Note: This hook will work on every update of userList state...!
    useEffect(() => {
        if (formStates.usersList.length > 0) {
            let users = formStates.usersList.slice(0);
            localStorage.setItem("Users", JSON.stringify(users));
        };
    }, [formStates.usersList]);

    return (
        <>
            <h1> Register User </h1>

            <div>
                <label>
                    Name:
                    <input
                        type='text'
                        placeholder='Enter Your Name'
                        value={formStates.name}
                        onChange={(e) => setFormStates({ ...formStates, name: e.target.value })}
                    />
                </label> <br />

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

                <button onClick={createUser}>
                    Register User
                </button>

                <hr />

                <button onClick={() => navigate("/")}>
                    Go to LogIn
                </button>
            </div>
        </>
    );
};

export default SignUp;