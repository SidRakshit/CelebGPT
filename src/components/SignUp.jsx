import React, { useState } from "react";
import UserPool from "../UserPool";
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmationCode, setConfirmationCode] = useState("");
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        const attributeList = [];

        const dataEmail = {
            Name: 'email',
            Value: email,
        };
        const dataName = {
            Name: 'name',
            Value: name,
        };

        const attributeEmail = new CognitoUserAttribute(dataEmail);
        const attributeName = new CognitoUserAttribute(dataName);

        attributeList.push(attributeEmail);
        attributeList.push(attributeName);

        UserPool.signUp(username, password, attributeList, null, (err, data) => {
            if (err) {
                console.error(err);
                setErrorMessage(err.message || JSON.stringify(err));
                setSuccessMessage("");
            } else {
                console.log(data);
                setUser(data.user);
                setErrorMessage("");
                setSuccessMessage("Sign up successful! Please check your email for the confirmation code.");
            }
        });
    };

    const onConfirm = (event) => {
        event.preventDefault();

        const cognitoUser = new CognitoUser({
            Username: username,
            Pool: UserPool,
        });

        cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
            if (err) {
                console.error(err);
                setErrorMessage(err.message || JSON.stringify(err));
                setSuccessMessage("");
            } else {
                console.log("User confirmed successfully", result);
                setErrorMessage("");
                setSuccessMessage("Account confirmed successfully! You can now log in.");
            }
        });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>

            {user && (
                <form onSubmit={onConfirm}>
                    <label htmlFor="confirmationCode">Confirmation Code</label>
                    <input
                        type="text"
                        value={confirmationCode}
                        onChange={(event) => setConfirmationCode(event.target.value)}
                    />
                    <button type="submit">Confirm Account</button>
                </form>
            )}

            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
    );
};

export default SignUp;
