"use client";

import React, { useState } from 'react'
import Mobile from './Mobile'
import Nav from './Nav'


const Responsive = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div>
      <Nav openNav={handleNavShow}/>
      <Mobile showNav = {showNav} closeNav = {handleCloseNav}/>
    </div>
  )
}

export default Responsive
