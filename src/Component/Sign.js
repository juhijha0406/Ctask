
import React from 'react'

const  Sign =(props) => {

    const {email, pass ,setEmail ,setPass ,handlelogin ,handleSignup ,Account,setAccount ,emailError ,passError} = props;
    
    return (
       
            <section className="login">
                <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required 
                value={email} onChange ={(e)=> 
                        setEmail(e.target.value)} />
                <p className="errorMsg"> {emailError} </p>
                <label>Password</label>
                <input type="password" required 
                value={pass} onChange ={(e)=> setPass(e.target.value)} />
                 <p className="errorMsg"> {passError} </p>
                 <div className="btnContainer">
                 {Account ? (
                   <>
                    <button onClick={handlelogin}>Signin</button>
                    <p>Don't Have an account ? <span onClick={()=> setAccount(!Account)}>Signup</span></p>
                   </>
                 ):(
                    <>
                    <button onClick={handleSignup}>Signup</button>
                    <p>Have an account ? <span onClick={()=> setAccount(!Account)}>Sign in</span></p>
                   </>
                 )}


                 </div>
              </div>
            </section>
     
    )
}

export default Sign;
