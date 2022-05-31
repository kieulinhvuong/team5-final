import React, { useState, useEffect } from 'react';
import LOGF from './Logincomponents/LOGF';
//import RegisF2 from './Logincomponents/RegisF2';
import RegisF from './Logincomponents/RegisF';
import './LR.css';
import './RF.css';
import { auth } from './firebaseconfig/fire2';
import Hero from './Hero';
//import KRlogo from './Logincomponents/KRlogo'
import { Link } from 'react-router-dom';

const APLOG = () => {

    const [user, setUser] = useState("");
    const [setEmail] = useState("");
    const [setPassword] = useState("");



    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    /*const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }*/

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



    const handleLogout = () => {
        auth.signOut();
    };





    return (
        <div className='APLOG'>



            {user ? (
                <Hero handleLogout={handleLogout} />
            ) : (

                <LOGF />
            )}
        </div>
    )
}

export default APLOG;