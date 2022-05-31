import React, { useState, useEffect } from 'react';

//import RegisF from './RegisF';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseconfig/fire2';
//import '../LR.css';


//import React from 'react';
import KRlogo from './KRlogo.png';
//import RegisForm from './RegisForm';
//import { Link } from 'react-router-dom';


const LOGF = () => {


    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);



    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');


    }

    const handleLogin = () => {
        clearErrors();
        console.log("Error Cleared");
        auth.signInWithEmailAndPassword(email, password)
            .catch((err) => {
                console.log(err);
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;

                }


            });

    };



    const authListener = () => {
        auth.onAuthStateChanged(user => {
            if (user) {
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
        <div className='LOGF'>
            {/*<div className='LOGFContainer'>*/}
            <img src={KRlogo} className="KR-logo" alt="KRlogo" />
            <label>Email</label>
            <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
            <p className="errorMsg">{emailError}</p>
            <label>Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <p className="errorMsg">{passwordError}</p>
            <div className='btnContainer'>
                {/*{hasAccount ? (*/}
                <>
                    <button onClick={handleLogin}>Login</button>
                    <p>Don't Have An Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    <Link to="../Register"><button>Register</button>
                        {/*<p>Have An Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>*/}
                    </Link>

                </>

                {/*}) : (*/}


            </div>
            {/*</div>*/}
        </div >

    )
}


export default LOGF;