import React from 'react';
import './App.css';

function Sign() {


    const viewPassword = () => { 
        var x = document.getElementById("pass");
        if (x.type === "password") {
            x.type = "text";
        } 
        else {
            x.type = "password";
        }
    }


    return (
      <div >
      <section class="text">
      <h1>Sign Up</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3 className="link">For more info Go to <a href="https://reactjs.org/">React</a></h3>
    </section>

      <div class="box">
      <section class="input-1">
        <input type="text" placeholder="First Name" />
      </section>
      <section class="input-2">
        <input type="text" placeholder="Last Name" />
      </section>
      <section class="input-3">
        <input type="email" placeholder="Email Address" />
      </section>
      <section class="input-4">
        <input type="password" placeholder="Password" id="pass" />
      </section>
      <section class="input-5">
        <input type="checkbox" onClick={viewPassword} />Show Password
      </section>
      <section class="input-6">
        <button type="button" name="button" class="free">Sign Up For Free</button>
      </section>
    </div>
      </div>


    );
  }
  
  export default Sign;