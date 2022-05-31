import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./UserHomePage/userHomePage.js";
import DriverFeed from "./DriverNewsFeed/DriverFeed";
import Applog from "./Applog";
import Request from "./RequestPage/Request.js";
import Contact from "./ContactUs/Contact.js";
// import DriverProfilePage from "./DriverProfile/DriverProfilePage";
import AcceptedRq from "./AcceptedRq/AcceptedRq";
import Hero from "./Hero.js";
import APLOG from "./APLOG";
import RegisF from "./Logincomponents/RegisF";
import UserHistory from "./userHistoryPage/UserHistory.js";

function RoutesController() {
  return (
    <Routes>
      <Route exact path="/driverfeed" element={<DriverFeed />} />
      <Route exact path="/" element={<Applog />} />
      <Route exact path="/Register" element={<RegisF />} />
      <Route exact path="/homepage" element={<HomePage />} />
      <Route exact path="/request" element={<Request />} />
      {/* <Route exact path="/driverprofile" element={<DriverProfilePage />} /> */}
      <Route exact path="/acceptedrequests" element={<AcceptedRq />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/userhistory" element={<UserHistory />} />
      <Route exact path="/term" element={<Hero />} />
    </Routes>
  );
}

export default RoutesController;
