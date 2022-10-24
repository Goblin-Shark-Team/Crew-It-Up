import React, { useState } from 'react';
import '../styles/signup.scss';
import Navbar from './Navbar.js';

export default function Signup(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 
  function validateForm(){
    return email.length > 0 && password.length > 0;
  } 

  function handleSubmit(e){
    e.preventDefault();
    console.log(email, password, confirmPassword)
    fetch(`user/signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        passcode: password,
        confirmPasscode: confirmPassword,
      })
    })
      .then(data => data.json())
      .then(data => {
        console.log(data);
        if(data.errors) {
          const errors = data.errors.map(x => x.msg).join('\n');
          alert(errors);
          setEmail('');
          setPassword('');
          setConfirmPassword('');
        } else if (data === false) {
          alert('That email is already associated with an account.')
        } else { 
            props.setUser(data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div id='body'>
      <Navbar />
        <form id='signup-box' onSubmit={handleSubmit}>
            <span className='primary-text'>SIGN UP</span>
            <div id='signup-boxes'>
                <div>
                    <input type='email'
                    placeholder="Email"
                    name="email"
                    className="signup-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input type="password"
                    placeholder="Password"
                    name="password"
                    className="signup-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="signup-input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>
            <div id='signup-button'>
                <button type='submit' id='login-btn' disabled={!validateForm()}>Sign Up</button>
            </div>
        </form>
        </div>
  )
} 