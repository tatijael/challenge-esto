import React from 'react'

import './footer.css'

import logo from '../../assets/Dark.svg';
import bg from '../../assets/Social_Icons.png';
import bg1 from '../../assets/Social_Icons2.png';
import bg2 from '../../assets/Social_Icons3.png';
import bg3 from '../../assets/Social_Icons4.png';

const Footer = () => {
  return (
    <div className="background-black">
      <div className="border-line">
        <div className="footer-wrapper container ">
        <div className="social-media-mobile">
            <img src={bg} alt="#"/>
            <img src={bg1}alt="#"/>
            <img src={bg2}alt="#"/>
            <img src={bg3}alt="#"/>
          </div>
          <img src={logo} alt="#"/>
          <p>© 2020 Landify UI Kit. All rights reserved</p>
          <div className="social-media-desktop">
            <img src={bg} alt="#"/>
            <img src={bg1}alt="#"/>
            <img src={bg2}alt="#"/>
            <img src={bg3}alt="#"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Footer } 
