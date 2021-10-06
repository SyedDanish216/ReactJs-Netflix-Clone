import React from 'react'
import { useState } from 'react/cjs/react.development'
import { useRef } from 'react'
import "./Register.css"
import { NavLink } from 'react-router-dom'
const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const emailRef=useRef();
    const passwordRef=useRef();

    const handleStart=()=>{
         setEmail(emailRef.current.value);
         setPassword("");
    }
    const handleFinish=()=>{
         setPassword(passwordRef.current.value);
    }
    const inputevent=(e)=>{
       setPassword(e.target.value);      
    }
    
    return (
        <div className="register">
        <div className="top">
        <div className="wrapper">
            <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
            />
            <button className="loginButton">
                <NavLink className="navlink" to="/login">Sign In</NavLink>
            </button>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows and more</h1>
                <h2> Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership
                </p>
                {!email ? (
                    <div className="inputemailbutton">
                    <input type="email" placeholder="email address" ref={emailRef} />
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
                ):(
                    <div className="inputemailbutton">
                    
                    <input type="password" placeholder="password" value={password} onChange={inputevent} ref={passwordRef} />
                    <NavLink className="navlink" to="/login" >
                    <button className="registerButton" onClick={handleFinish}>
                    Start
                    </button>
                    </NavLink>
                 
                    
                    </div>
                )}
              
            </div>

        </div>
            
        </div>
    )
}

export default Register
