import React from 'react';
import { NavLink } from "react-router-dom";

export default function SiteBar() {
  return (
    <div className='navbar navbar-nav'>
      <NavLink to={"/"} className="nav-link">Home</NavLink>
      <NavLink to={"/purchases"} className="nav-link">ToDos</NavLink>
    </div>
  );
}
