import React from 'react'

import menu from '../../assets/Group_1.svg';

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li><a href="#how">How it Works</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#how">How it Works</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
        <button className="btn">Buy now</button>
        <img className= "menu-mobile" src={menu} alt='#' />
      </div>
    </div>
  )
}

export { Nav } 
