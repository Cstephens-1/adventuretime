import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignupState } from './context/SignUpProvider';




function Signup() {
  const [email, setEmail] = useState('');
  const [signupState, setSignupState] = useSignupState();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
 
  
  const appSignup = async (event) => {
    event.preventDefault()
    if (!password) {
      console.log("pw and un must be filled")
      return;
    }
    setSignupState({ ...signupState, email, password, username });

    navigate('/launchpage');
  };

  console.log(signupState)


  let handleUsername = async (e) => {
    await setUsername(e.target.value);
  };

  let handleEmail = async (e) => {
    await setEmail(e.target.value);
  };

  let handlePassword = async (e) => {
    await setPassword(e.target.value);
  };


  return (
    <div>
      <div>
        <header>
          <h3>Create A New Character</h3>
        </header>
        <div>
          <form onSubmit={appSignup}>
            <div className="AppOB1-email">
              <label for="email" className="form-label">Email address </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter you email"
                onChange={handleEmail}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="AppOB1-email">
              <label for="username" className="form-label">Username</label>
              <input
                type="name"
                className="form-control"
                id="username"
                placeholder="Enter you username"
                onChange={handleUsername}
              />
            </div>
            <div>
              <label for="password" className="form-label"> Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                onChange={handlePassword}
              />
            </div>
            <div className="creat-account">
              <button type="submit" className="btn fw-bold createButton">Create Account</button>
            </div>
          </form>
        </div>
        <div className="login">
          <p className="login-text">Already have an account?<span>{' '}<a href="/Login" id="loginLink">Log In </a></span></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
