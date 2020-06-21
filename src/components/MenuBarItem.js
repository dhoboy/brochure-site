import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuBarItem = ({ display, path }) => {
  return (
    <NavLink
      className="menu-bar-item"
      activeClassName="current"
      to={path}
    >
      {display}
    </NavLink>
  )
};

export default MenuBarItem;
