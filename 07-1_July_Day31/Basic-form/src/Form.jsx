import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='container'>
      <div className="card">
        <h1>Login Form</h1>

        <div className="tabs">
            <button className="active">Login</button>
            <button>Signup</button>
        </div>

        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password'/>

        <p className="forgot">Forgot password?</p>

        <button className="login-btn">
            Login
        </button>

        <p className="bottom-text">
            Not a member? 
            <span>Signup now</span>
        </p>
      </div>
    </div>
  )
}

export default Form
