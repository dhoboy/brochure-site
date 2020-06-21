import React from 'react';
import MenuBarItem from './MenuBarItem';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <MenuBarItem display="Home" path="/home" />
      <MenuBarItem display="How It Works" path="/how-it-works" />
      <MenuBarItem display="Contact" path="/contact" />
      <MenuBarItem display="Testimonials" path="/testimonials" />
    </div>
  );
};

export default MenuBar;
