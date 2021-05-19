import React from 'react'

import menu from '../../assets/Group_1.svg';

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li><a href="#">How it Works</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">How it Works</a></li>
          <li><a href="#">Support</a></li>
        </ul>
        <button className="btn">Buy now</button>
        <img className= "menu-mobile" src={menu} alt='#' />
      </div>
    </div>
  )
}

export { Nav } 
