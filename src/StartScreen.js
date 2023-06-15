import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function StartScreen() {
  const navigate = useNavigate();

  return (
    <div className='container start-screen'>
      <header className='header'>
        <h3>Welcome to Adventuretime!</h3>
      </header>
      <div className='signUpContainer'>
        <div className='signUpBox'>
          <div className='title'>For Apprentices</div>
          <div className='sub-title'>World-class tech apprenticeships</div>
          <button onClick={() => {navigate(`/signup`)}} variant='contained' sx={{ bgcolor: '#A7B5F9', color: 'black' }}>Sign up</button>
        </div>
      </div>
      <footer className='footer'>
        <h5 className='logIn'>Already have an account?{' '}<Link to='/login' id='loginLink'><strong>Log In</strong></Link></h5>
      </footer>
    </div>
  );
}

export default StartScreen;
