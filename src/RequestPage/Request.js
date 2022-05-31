import React, { useState } from "react";
import { db } from "../firebaseconfig/fire2";
import logo from "../UserHomePage/logopic.png";
import "./Request.css";
import { auth } from "../firebaseconfig/fire2.js";
import { useNavigate } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

function Request() {
  const history = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => history("/"));
  };

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numberOfPassengers, setNumberOfPassengers] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [pickupDate, setPickUpDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupLocation2, setPickupLocation2] = useState(""); // address pt 2
  const [pickupLocation3, setPickupLocation3] = useState(""); // city

  const [destination, setDestination] = useState("");
  const [destination2, setDestination2] = useState(""); // address pt 2
  const [destination3, setDestination3] = useState(""); //city
  const [paymentRange, setPaymentRange] = useState("");
  const [notes, setNotes] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    const auth = getAuth();
    const user = auth.currentUser;

    db.collection("userRequest")
      .add({
        uid: user.uid,
        timeStamp: serverTimestamp(),
        name: name,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        numberOfPassengers: numberOfPassengers,

        pickupTime: pickupTime,
        pickupDate: pickupDate,

        pickupLocation: pickupLocation,
        pickupLocation2: pickupLocation2,
        pickupLocation3: pickupLocation3,

        destination: destination,
        destination2: destination2,
        destination3: destination3,
        paymentRange: paymentRange,
        notes: notes,
      })
      .then(() => {
        alert("Your request has been submitted");
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
    setNumberOfPassengers("");

    setPickupTime("");
    setPickUpDate("");
    setPickupLocation("");
    setPickupLocation2("");
    setPickupLocation3("");
    setDestination("");
    setDestination2("");
    setDestination3("");
    setPaymentRange("");
    setNotes("");
  };
  return (
    <div className="Appuserrequest">
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
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {
        //HEADER ENDS HERE , BEGIN PAGE BELOW
      }

      <div className="bannerReq">
        <h1 className="Req">Make your Request</h1>
      </div>
      <form className="Req" onSubmit={handleSubmit}>
        <div className="itemReq">
          <p className="Req">Name *</p>
          <div className="name-item">
            <input
              className="Req"
              type="text"
              value={name}
              required
              placeholder="name *"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="Req"
              type="text"
              value={lastName}
              required
              placeholder="Last name *"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="itemReq">
          <p className="Req">Email</p>
          <input
            className="Req"
            value={email}
            type="text"
            placeholder="Email *"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="itemReq">
          <p className="Req">Phone Number</p>
          <input
            className="Req"
            value={phoneNumber}
            type="tel *"
            required
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="itemReq">
          <p className="Req">Number of Passengers</p>

          <input
            className="Req"
            type="number"
            required
            min="1"
            placeholder="Number of Passengers *"
            value={numberOfPassengers}
            onChange={(e) => setNumberOfPassengers(e.target.value)}
          />
        </div>
        <div className="itemReq">
          <p className="Req"> Pick Up Date *</p>
          <input
            className="Req"
            type="date"
            required
            value={pickupDate}
            onChange={(e) => setPickUpDate(e.target.value)}
          />
          <i className="fas fa-calendar-alt" />
        </div>

        <div className="itemReq">
          <p className="Req">Pick Up Time *&nbsp; &nbsp;hh:mm: AM/PM-</p>
          <input
            className="Req"
            type="time"
            required
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
          />
          <i className="fas fa-clock" />
        </div>

        <div className="itemReq">
          <p className="Req"> Pick Up Point </p>
          <input
            className="Req"
            type="text"
            value={pickupLocation}
            required
            placeholder="Street address *"
            onChange={(e) => setPickupLocation(e.target.value)}
          />
          <input
            className="Req"
            type="text"
            value={pickupLocation2}
            placeholder="Street address line 2"
            onChange={(e) => setPickupLocation2(e.target.value)}
          />
          <div className="city-item">
            <input
              className="Req"
              type="text"
              value={pickupLocation3}
              required
              placeholder="City *"
              onChange={(e) => setPickupLocation3(e.target.value)}
            />
          </div>
        </div>
        <div className="itemReq">
          <p className="Req">Destination</p>
          <input
            className="Req"
            type="text"
            required
            value={destination}
            placeholder="Street address *"
            onChange={(e) => setDestination(e.target.value)}
          />
          <input
            className="Req"
            type="text"
            value={destination2}
            placeholder="Street address line 2"
            onChange={(e) => setDestination2(e.target.value)}
          />
          <div className="city-item">
            <input
              className="Req"
              type="text"
              required
              value={destination3}
              placeholder="City *"
              onChange={(e) => setDestination3(e.target.value)}
            />
          </div>
        </div>
        <div className="itemReq">
          <p className="Req">Payment Range</p>

          <input
            className="Req"
            type="number"
            required
            min="1"
            placeholder="$ *"
            value={paymentRange}
            onChange={(e) => setPaymentRange(e.target.value)}
          />
        </div>
        <div className="itemReq">
          <p className="Req"> Notes</p>
          <textarea
            className="Req"
            rows={3}
            placeholder="Message to your driver"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
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

export default Request;

/*




function Request() {



  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="Appuserrequest">
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
              <a href="#" className="nav-link-contact">
                History
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="/" className="nav-link-contact">
                Become a Driver
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="/contact" className="nav-link-contact">
                Contact Us
              </a>
            </li>
            <li className="nav-item-contact">
              <a href="#" className="nav-link-contact">
                Sign Out
              </a>
            </li>
          </ul>
        </nav>
      </header>
      {
        //HEADER ENDS HERE , BEGIN PAGE BELOW
      }

      <form className="Req">
        <div className="itemReq">
          <p className="Req">Name</p>
          <div className="name-item">
            <input
              className="Req"
              type="text"
              name="name"
              placeholder="First name"
              {...register("First name", { required: true, maxLength: 20 })}
            />
            <input
              className="Req"
              type="text"
              name="name"
              placeholder="Last name"
              {...register("Last name", { required: true, maxLength: 20 })}
            />
          </div>
        </div>

        <div className="itemReq">
          <p className="Req">Email</p>
          <input
            className="Req"
            name="name"
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>

        <div className="itemReq">
          <p className="Req">Phone Number</p>
          <input
            className="Req"
            name="name"
            type="tel"
            placeholder="Phone Number"
            {...register("Phone Number", { required: true, maxLength: 10 })}
          />
        </div>

        <div className="itemReq">
          <p className="Req">Number of Passengers</p>

          <input
            className="Req"
            type="number"
            placeholder="Number of Passengers"
            {...register("Number of Passengers", {
              required: true,
              max: 99,
              min: 0,
              maxLength: 2,
            })}
          />
        </div>
        {
          //    Other radio stuff here, for now is on bottom of page
        }
        <div className="questionReq">
          <p className="Req">Vehicle</p>
          <div className="question-answerReq">
            <div>
              <input
                {...register("Vehicle Type", { required: true })}
                type="radio"
                value="Compact"
                id="radio_1"
                name="vehicle"
              />
              <label htmlFor="radio_1" className="radio">
                <span>Compact</span>
              </label>
            </div>

            <div>
              <input
                {...register("Vehicle Type", { required: true })}
                type="radio"
                value="SUV"
                id="radio_2"
                name="vehicle"
              />
              <label htmlFor="radio_2" className="radio">
                <span>SUV</span>
              </label>
            </div>
            <div>
              <input
                {...register("Vehicle Type", { required: true })}
                type="radio"
                value="Van"
                id="radio_3"
                name="vehicle"
              />
              <label htmlFor="radio_3" className="radio">
                <span>Van</span>
              </label>
            </div>
            <div>
              <input
                {...register("Vehicle Type", { required: true })}
                type="radio"
                value="Pickup"
                id="radio_4"
                name="vehicle"
              />
              <label htmlFor="radio_4" className="radio">
                <span>Pickup</span>
              </label>
            </div>
            <div>
              <input
                {...register("Vehicle Type", { required: true })}
                type="radio"
                value="other:"
                id="radio_5"
                name="vehicle"
              />
              <label htmlFor="radio_5" className="radio other">
                <span>other:</span>
              </label>
            </div>
          </div>
        </div>

        <div className="itemReq">
          <p className="Req"> Pick Up Date</p>
          <input
            className="Req"
            type="date"
            name="bdate"
            {...register("Pick Up Date", { required: true })}
          />
          <i className="fas fa-calendar-alt" />
        </div>

        <div className="itemReq">
          <p className="Req">Pick Up Time &nbsp; &nbsp;hh:mm: AM/PM-</p>
          <input
            className="Req"
            type="time"
            name="name"
            {...register("Pick Up Time", { required: true })}
          />
          <i className="fas fa-clock" />
        </div>

        <div className="itemReq">
          <p className="Req"> Pick Up Point</p>
          <input
            className="Req"
            type="text"
            name="name"
            placeholder="Street address"
            {...register("street 1", { required: true })}
          />
          <input
            className="Req"
            type="text"
            name="name"
            placeholder="Street address line 2"
            {...register("street 2", { required: true })}
          />
          <div className="city-item">
            <input
              className="Req"
              type="text"
              name="name"
              placeholder="City"
              {...register("City", { required: true })}
            />

            <select className="Req">
              <option value>Country</option>
              <option value={1}>Russia</option>
              <option value={2}>Germany</option>
              <option value={3}>France</option>
              <option value={4}>Armenia</option>
              <option value={5}>USA</option>
            </select>
          </div>
        </div>

        <div className="itemReq">
          <p className="Req">Destination</p>
          <input
            className="Req"
            type="text"
            name="name"
            placeholder="Street address"
            {...register("street 1 Destination", { required: true })}
          />
          <input
            className="Req"
            type="text"
            name="name"
            placeholder="Street address line 2"
            {...register("street 2 Destination", { required: true })}
          />
          <div className="city-item">
            <input
              className="Req"
              type="text"
              name="name"
              placeholder="City"
              {...register("City Destination", { required: true })}
            />

            <select className="Req">
              <option value>Country</option>
              <option value={1}>Russia</option>
              <option value={2}>Germany</option>
              <option value={3}>France</option>
              <option value={4}>Armenia</option>
              <option value={5}>USA</option>
            </select>
          </div>
        </div>

        <div className="itemReq">
          <p className="Req"> Notes</p>

          <textarea className="Req" rows={3} defaultValue={""} />
        </div>

        <div className="btn-block">
          <a href="/homepage" className="submit">
            SUBMIT
          </a>
        </div>
      </form>
    </div>
  );
}

export default Request;
*/
