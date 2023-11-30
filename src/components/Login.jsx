import React from 'react'



const Login = () => {

    
   

  return (
    <>
         
<div className="Ashish">
    <div className="wrapper">
      
        <div className="column details" style={{background:"linear-gradient(57deg, #01ba9e, #1e4d92)"}}>
            <div className="signin">
                <h1>Sign in</h1>
                <input type="email" placeholder="Username"/>
                <input type="password" placeholder="password"/>
                <a href="#">Forgot password?</a>
                <button className="form-submit">Sign in</button>
                <span>You don't have an account yet? <button id="signup">Create it now</button></span>
            </div>
           
        </div>
        <div className="column content" style={{background:"linear-gradient(57deg, #01ba9e, #1e4d92)"}}>
            <div className="signin">
                <h1>Welcome back!!</h1>
                <p>To keep connected with us please login with your personal info</p>
            </div>
          
        </div>



    </div>
 </div>

 

    </>
  )
}

export default Login;