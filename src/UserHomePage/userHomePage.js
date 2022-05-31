import "./userHomePage.css";
import "../RequestPage/Request.css";
import logo from "./logopic.png";
import { auth } from "../firebaseconfig/fire2.js";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const history = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => history("/"));
  };

  return (
    <div className="AppUser">
      <header className="headerUser">
        <nav className="navbarUser">
          <nav className="logopicuserhome">
            <a href="/homepage">
              <img className="userHome" src={logo} alt="logo" />
            </a>
          </nav>
          <ul className="nav-menu-home">
            <li className="nav-item-home">
              <a href="/request" className="nav-link-home">
                Make a Request
              </a>
            </li>
            <li className="nav-item-home">
              <a href="/userhistory" className="nav-link-home">
                History
              </a>
            </li>
            <li className="nav-item-home">
              <a href="/driverfeed" className="nav-link-home">
                Become a Driver
              </a>
            </li>
            <li className="nav-item-home">
              <a href="/contact" className="nav-link-home">
                Contact Us
              </a>
            </li>
            <li className="nav-item-home">
              <button className="button-nav-link" onClick={handleLogout}>
                {" "}
                Sign Out{" "}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {
        // END OF NAVBAR
      }
      <div className="bannerReq">
        <h1 className="Req">CONNECTING KNOX, ONE RIDE AT A TIME</h1>
      </div>
      <table className="homeTable">
        <thead>
          <tr>
            <th>REQUEST A RIDE</th>
            <th>BECOME A DRIVER</th>
            <th>CONTACT US</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <br></br>
              Make Ride requests easily with the hassle free form, click the
              "Make a Request" to get started!
            </td>
            <td>
              <br></br>
              Have a car, and want to make a quick buck? Become a Driver now,
              and schedule driving requests! click "Become a Driver"!
            </td>
            <td>
              <br></br>
              Have anything you want to let us know about? Head over to the
              "Contact Us" page above to give us anonymous feedback!
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HomePage;
