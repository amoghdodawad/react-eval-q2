// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom';

// const Home = () => {

//     return (
//         <div>
//             <div>
//                 Home
//             </div>
//             <Link to='/booking-form'>
//                 Click here to book airline ticket
//             </Link>
//         </div>
//     )
// }

// export default Home;
// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-title">Welcome to Our airline</div>
      <p className="home-text">
      Welcome to the epitome of travel excellence! At our airline, we redefine air travel by offering a seamless and luxurious experience that transcends expectations. Immerse yourself in a world of comfort, reliability, and exceptional service as you embark on your journey with us. From meticulously designed cabins to a team of dedicated professionals, we prioritize your satisfaction at every step. Our commitment to safety, punctuality, and customer satisfaction sets us apart, ensuring that your travel experience is not just a journey but a memorable adventure. Book with our airline today and elevate your air travel to new heights. We are not just an airline; we are your trusted partner in creating unforgettable moments in the sky.
      </p>
      <Link to="/booking-form" className="home-link">
        Click here to book an airline ticket
      </Link>
    </div>
  );
};

export default Home;
