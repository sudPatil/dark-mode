import React from 'react';
import ThemeButton from './ThemeButton'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navItems">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Us</Link>
      <ThemeButton />
    </div >
  )
}

export default NavBar