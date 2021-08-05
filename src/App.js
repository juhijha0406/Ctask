import React,{useState,useEffect} from 'react';
import fire from './fire';
import "./Component/Sign.css";
import Sign from './Component/Sign';
import Dash from './Component/Dash';


const App = ({handlelogout})=> {

    const [user,setUser] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [emailError,setEmailError] = useState('');
    const [passError,setPassError] = useState('');
    const [Account,setAccount] = useState(false);

   const clearInputs = ()=>{
       setEmail('');
       setPass('');
   }

   const clearErrors = ()=>{
       setEmailError('');
       setPassError('');
   }


    const handlelogin =()=>{
        clearErrors();
        fire 
        .auth()
        .signInWithEmailAndPassword(email,pass)
        .catch(err =>{
            switch(err.code){
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                     setEmailError(err.message);
                     break;
                  case "auth/wrong-password":
                      setPassError(err.message);
                      break;   

            }
        });


    };

    const handleSignup =()=>{
        clearErrors();
        fire 
        .auth()
        .createUserWithEmailAndPassword(email,pass)
        .catch(err =>{
            switch(err.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                //case "auth/user-not-found":
                     setEmailError(err.message);
                     break;
                  case "auth/weak-password":
                      setPassError(err.message);
                      break;   

            }
        });


    };

    const authListener = ()=>{
        fire.auth().onAuthStateChanged(user =>{
            if(user){
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }

        });
    };

    useEffect(() => {
       authListener();
    }, []);

    return (
        <div className="App">
            {
                user ? (
                    <Dash handlelogout={handlelogout}/>

                ):(
                    <Sign 
                    email = {email}
                          pass = {pass}
                          setEmail = {setEmail}
                          setPass = {setPass}
                          handlelogin = {handlelogin}
                          handleSignup = {handleSignup}
                          Account = {Account}
                          setAccount = {setAccount}
                          emailError = {emailError}
                         passError = {passError}
                    />
                )
            }

          
        </div>
        
      
    )
}

export default App;




// import React from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Reports from './pages/Reports';
// import Products from './pages/Products';

// function App() {
//   return (
//     <>
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route path='/' exact component={Home} />
//           <Route path='/reports' component={Reports} />
//           <Route path='/products' component={Products} />
//         </Switch>
//       </Router>
//     </>
//   );
// }

//export default App;




