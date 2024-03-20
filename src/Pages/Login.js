import React from 'react'
import "./Login.css"
function Login() {
  return (
    <div className='maincontainer'>
      <div className='container1'>
        <h1>Sign Up</h1>
        <div className='myinput'>
        <input placeholder='your name' type='text' className='input'></input>
        <input placeholder='your email' type='email' className='input'></input>
        <input placeholder='your pasword' type='password' className='input'></input>
        <button className='continuebtn'>Continue</button>
        </div>
        <div className='container2'>
        <div className='already'>
        <p>Already have an account?</p>
        <h4 className='loginhere'>login here</h4>

        </div>
        <div className='chck'>
        <input type='checkbox' className='chekbox1'></input>
        <p>By continuing, I agree to the terms of use & privacy policy.</p>

        </div>
       


      </div>
     
      </div>

     
      
    </div>
  )
}

export default Login
