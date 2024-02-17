// import React from 'react'

// const Display = () => {
//     // console.log(localStorage.getItem('data'));
//     const [ src, dest, passengerDetails, travelClass, date, insurance ] = localStorage.getItem('data').split(',');
//     console.log(src, dest,travelClass,date,insurance);
//     const numberOfPassengers = passengerDetails.split(' ')[0];
//     console.log(numberOfPassengers);
//     for(let i=0;i<numberOfPassengers;++i){
//         console.log(passengerDetails.split(' ')[i+1]);
//     }
//     return (
//         <div>Display</div>
//     )
// }

// export default Display
// Display.js

import React from 'react';
import './Display.css';  // Import the CSS file

const Display = () => {
  const data = localStorage.getItem('data');

  if (!data) {
    return <div>No data available</div>;
  }

  const [src, dest, passengerDetails, travelClass, date, insurance] = data.split(',');

  const numberOfPassengers = parseInt(passengerDetails.split(' ')[0], 10);
  const passengerNames = passengerDetails.split(' ').slice(1);
  let price = 0;
  if(travelClass === 'Economy'){
    price += 2000 * parseInt(numberOfPassengers);
  } else {
    price += 40000 * parseInt(numberOfPassengers);
  }
  if(insurance === 'Yes') price += 20 * parseInt(numberOfPassengers);

  return (
    <div className="display-container">
      <h2>Ticket Details</h2>
      <div>
        <strong>Source:</strong> {src}
      </div>
      <div>
        <strong>Destination:</strong> {dest}
      </div>
      <div>
        <strong>Travel Class:</strong> {travelClass}
      </div>
      <div>
        <strong>Travel Date:</strong> {date}
      </div>
      <div>
        <strong>Insurance:</strong> {insurance}
      </div>
      <div>
        <strong>Number of Passengers:</strong> {numberOfPassengers}
      </div>
      <div>
        <strong>Passenger Names:</strong>
        <ul>
          {passengerNames.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>
            Total Price: {price} Rupees.
        </strong>
      </div>
      <div className='confirm-button' onClick={() => {
        alert('Congrats.... The ticket has been successfully booked')
      }}>
        Click here to confirm your ticket
      </div>
    </div>
  );
};

export default Display;
