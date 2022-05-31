import React, { useState, useEffect } from "react";
import LoginForm from "./Logincomponents/LoginForm";
import "./LR.css";
import Hero from "./Hero";
import { auth } from "./firebaseconfig/fire2";
import { useNavigate } from "react-router-dom";

//import RegisForm from './Logincomponents/RegisForm';
//import { Route, Routes } from 'react-router-dom';
// import UserHomePage from './UserHomePage/userHomePage';
//import HomePage from './HomePage';
//import { Link } from 'react-router-dom'

const Applog = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const history = useNavigate();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => history("/homepage"))
      .catch((err) => {
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

  /* const handleSignup = () => {
    clearErrors();
    fire2
      .auth()
      .createUserWithEmailAndPassword(
        email,
        password,
        fname,
        lname,
        phonenumber,
        license,
        car
      )
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          case "auth/phone-already-in-use":
            setPhoneError(err.message);
            break;
        }
      });
  };
*/
  const handleLogout = () => {
    auth.signOut();
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
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
    <div className="Applog">
      {/*{user ? (
        <Hero handleLogout={handleLogout} />
      ) : (*/}
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        //handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}

      //fname={fname}
      //setFname={setFname}
      //lname={lname}
      //setLname={setLname}
      //phonenumber={phonenumber}
      //setPhonenumber={setPhonenumber}
      //license={license}
      //setLicense={setLicense}
      //phoneError={phoneError}
      />
      {/*)}*/}
    </div>
  );
};

export default Applog;
