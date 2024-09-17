import React from 'react';
import { NavLink } from 'react-router-dom';
import {RiLoginCircleLine} from "react-icons/ri";
const Login = () => {
    return (
        <>
             <div className="container-login">
             <div className="login-container-form">
             <div className="login-form-header">
              <div  className="login-Fp-header"><RiLoginCircleLine/></div>
              <p className='heading-login' >LogIn</p>
              </div>
              <label className="label" for="input">Email adress</label>
              <input className="input-lg" type="email" placeholder="Enter  dcb,cdbsEmail"/>
              <label className="label" for="input">Password</label>
              <input className="input-lg" type="password" placeholder="************"/>
              <div class="input-check-btn">
                <input className="input-checkbox" type="checkbox"/>
                <h3>Remember me</h3>
                <span className="frg-paswrd"> Forgot your Password?</span>
              </div>
              <NavLink to ="/"><a className="Login-btn">Login</a></NavLink>
              <div className="login-create-acc">
              <NavLink to = "/signIn"><button class='focus:outline-none p-3 m-4  pw-3text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"'>Create New Account</button></NavLink>
              </div>
              </div>
        </div>
        
        
              </>

        
        
    )
};
export { Login };