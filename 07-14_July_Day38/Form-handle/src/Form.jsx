import { useState } from "react";

export default function Form() {
    const [user, setUser] = useState("");
    const [displayUser, setDisplayUser] = useState("");

    function handleChange(e) {
        setUser(e.target.value);
    }

    function getSubmit(e) {
        e.preventDefault();
        setDisplayUser("Hello  "+  user);
    }

    return (
        <>
            <form onSubmit={getSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={user}
                    onChange={handleChange}
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                />

                <input type="submit" value="LOGIN" />
            </form>

            <h1>{displayUser}</h1>
        </>
    );
}