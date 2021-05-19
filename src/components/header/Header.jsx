import React from 'react';

import { Nav } from './Nav';

import logo from '../../assets/Dark.svg';
import './header.css'

const Header = () => {
  return (
    <div className="border-line">
      <div className="header-flex container ">
        <img src={logo} />
        <Nav />
      </div>
    </div>
  )
}

export { Header }
