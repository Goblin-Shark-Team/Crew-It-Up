import React from "react";
import React, { useState} from "react";

export default function Login () {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function validateForm(){
        return email.length > 0 && password.length > 0;
    }

    function handleChange(e){
        
    }

    function handleSubmit(e){
        console.log('submitted')
        e.preventDefault();
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type='text' />
                </label>
                
            </form>
        </div>
    )

}