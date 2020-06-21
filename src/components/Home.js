import React from 'react';
import Drew_Grasty from '../images/Drew_Grasty.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="photo" style={{ backgroundImage: `url(${Drew_Grasty}` }}></div>
    </div>
  );
}

export default Home;
