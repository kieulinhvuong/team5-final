import React from 'react'
import '../DriverNewsFeed/DriverGeneralPost.css';
import { Avatar } from '@material-ui/core';


function AcceptedForm({ timeStamp, name, lastName, email, phoneNumber, numberOfPassengers, pickupDate, pickupTime, pickupLocation, pickupLocation2, pickupLocation3, destination, destination2, destination3, paymentRange, notes }) {
    return (
        <div className="driverGeneralPost">
            <div className="driver_genPost_top">
               <Avatar src="" className="driver_genPost_avatar" />
               <div className="driver_genPost_topInfo">
                   <h3>{ name } { lastName }</h3>
                   <p>{ timeStamp }</p>
               </div>
           </div>

           <div className="driver_genPost_bottom">

               <label>Name</label>
               <p>{ name } {lastName}</p>

               <label>Email</label>
               <p>{ email }</p>

               <label>Phone number</label>
               <p>{ phoneNumber }</p>

               <label>Number of passengers</label>
               <p>{ numberOfPassengers }</p>

               <label>Pickup date</label>
               <p>{ pickupDate }</p>

               <label>Pickup time</label>
               <p>{ pickupTime }</p>

               <label>Pickup location</label>
               <p>{ pickupLocation }, { pickupLocation2 }, { pickupLocation3 }</p>

               <label>Destination</label>
               <p>{ destination }, { destination2 }, { destination3 }</p>

               <label>Payment range</label>
               <p>{ paymentRange }</p>

               <label>Notes</label> 
               <p>{ notes }</p> 
            </div>

            
        </div>
    )
}

export default AcceptedForm





