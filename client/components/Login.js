import React, { useState } from "react";
import '../styles/login.scss';

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
            <form id='login-box' onSubmit={handleSubmit}>
                <span id='login-title' className='primary-text'>LOG IN</span>
                <div id='login-boxes'>
                    <div>
                        <input type='text'
                        placeholder="Email"
                        name="email"
                        className="login-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input type="password"
                        placeholder="Password"
                        name="password"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div id='login-button'>
                    <button type='submit' id='login-btn' disabled={!validateForm()}>Login</button>
                </div>
            </form>
    )

}