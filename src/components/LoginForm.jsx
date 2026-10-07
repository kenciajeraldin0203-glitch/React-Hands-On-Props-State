import React, { useState } from "react";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        if (username.trim() !== "" && password.trim() !== "") {
            setMessage("Login Successful");
        } else {
            setMessage("Please enter username and password");
        }
    };

    return (
        <div className="card">
            <h2>Login Form</h2>

            <form onSubmit={handleLogin}>
                <label>Username:</label>

                <input
                    type="text"
                    value={username}
                    onChange={(event) =>
                        setUsername(event.target.value)
                    }
                    placeholder="Enter username"
                />

                <label>Password:</label>

                <input
                    type="password"
                    value={password}
                    onChange={(event) =>
                        setPassword(event.target.value)
                    }
                    placeholder="Enter password"
                />

                <button type="submit">
                    Login
                </button>
            </form>

            {message && (
                <p className={
                    message === "Login Successful"
                        ? "success"
                        : "error"
                }>
                    {message}
                </p>
            )}
        </div>
    );
}

export default LoginForm;