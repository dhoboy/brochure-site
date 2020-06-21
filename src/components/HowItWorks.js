import React from 'react';
import Pouring from '../images/Pouring.jpg';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <div className="photo" style={{ backgroundImage: `url(${Pouring}` }}></div>
      <p>
        <span>
          I source teas directly from Taiwan, Japan, and China, and prepare them at your event.
        </span>
        <span>
          I offer you and your guests a full service tea experience, using all of my own equipment.
        </span>
        <span>
          Get the conversation started at your next event by offering your guests tea service.
        </span>
        <span>
          Ideal for guests who want an alternative to alcohol.
        </span>
      </p>
    </div>
  );
};

export default HowItWorks;
