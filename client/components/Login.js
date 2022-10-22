import React, { useState } from "react";

export default function Login () {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function validateForm(){
        return email.length > 0 && password.length > 0;
    }


    function handleSubmit(e){
        e.preventDefault();
        console.log('submitted')
    }

    return (
        <div className='bigbox'>
            <form onSubmit={handleSubmit}>
                <span>Login</span>
                <div className="email-text">
                    <input type='text'
                    placeholder="Email"
                    name="email"
                    className="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='password-text'>
                    <input type="password"
                    placeholder="Password"
                    name="password"
                    className="pasword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div id='login-button'>
                    <button type='submit' disabled={!validateForm()}>Login</button>
                </div>
            </form>
           
           
        </div>
    )

}