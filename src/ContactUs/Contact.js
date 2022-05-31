import React, { useState } from "react";
//import "./Contact.css";
import logo from "../UserHomePage/logopic.png";
import "../RequestPage/Request.css";
import { db } from "../firebaseconfig/fire2";
import { auth } from "../firebaseconfig/fire2.js";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const history = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => history("/"));
  };

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("userContact")
      .add({
        name: name,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        notes: notes,
      })
      .then(() => {
        alert("Your feedback has been submitted");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setNotes("");
  };
  return (
    <div className="AppUserContact">
      <header className="headerUser">
        <nav className="navbarUserContact">
          <nav className="logopic">
            <a href="/homepage">
              <img className="userContactLogo" src={logo} alt="logo" />
            </a>
          </nav>
          <ul className="nav-menu-contact">
            <li className="nav-item-contact">
              <a href="/request" className="nav-link-contact">
                Make a Request
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="/userhistory" className="nav-link-contact">
                History
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="/driverfeed" className="nav-link-contact">
                Become a Driver
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="/contact" className="nav-link-contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item-contact">
              <button className="button-nav-link" onClick={handleLogout}>
                {" "}
                Sign Out{" "}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {
        // HEADE ENDS HERE ,FORM STARTS
      }
      <div className="bannerReq">
        <h1 className="Req">Contact Us</h1>
      </div>

      <form className="Req" onSubmit={handleSubmit}>
        <div className="itemReq">
          <p className="Req">Name</p>
          <div className="name-item">
            <input
              className="Req"
              type="text"
              value={name}
              required
              placeholder="First name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="Req"
              type="text"
              value={lastName}
              required
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="itemReq">
            <p className="Req">Email</p>
            <input
              className="Req"
              value={email}
              required
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="itemReq">
            <p className="Req">Phone Number</p>
            <input
              className="Req"
              value={phoneNumber}
              type="tel"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="itemReq">
            <p className="Req"> Your Comment Here</p>

            <textarea
              className="Req"
              rows={3}
              value={notes}
              required
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
        <button
          className="requestButton"
          type="submit"
          style={{ background: loader ? "#ccc" : "rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
