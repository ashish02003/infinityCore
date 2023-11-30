import React from "react";

const Signup = () => {
  return (
    <div className="Ashish">
      <div className="wrapper">
     
        <div className="column details" style={{background:"linear-gradient(57deg, #01ba9e, #1e4d92)"}}>
        
          <div className="signup" >
            <h1>Sign up</h1>
            <input type="name" placeholder="full name" />
            <input type="email" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="form-submit">Sign in</button>
            <span>
              Already have an account? <button id="signin">sign in</button>
            </span>
          </div>
        </div>
        <div className="column content" style={{background:"linear-gradient(57deg, #01ba9e, #1e4d92)"}}>
        
          <div className="signup">
            <h1>Hello friend!</h1>
            <p>Enter your personal details and start journey with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
