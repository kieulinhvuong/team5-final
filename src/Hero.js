import React from 'react';
import "./hero.css";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="Core">
            <div className="Terms">
                <label>Terms of Service</label>

                <p className='addinfo'>The following terms apply when using our Service</p>
                <ul className='addinfo'>
                    <li>The Service is only for Knox Students</li>
                    <li>Don't Use the service for Medical Emergencies, call an Ambulance</li>
                    <li>All agreements of payment made are user responsibilities</li>
                    <li>Incase of criminal act, the service will work with authrorities and provide information</li>
                </ul>



                <div className="btnSignUp"></div>
                <>
                    <Link to="../Register">
                        <button className="loginbtn">Register</button>
                        {/*<p>Have An Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>*/}
                    </Link>
                </>
            </div>
        </div>

    );

};

export default Hero;