import React from 'react';

import { Card } from './components/Card';
import { data } from './data';

import './howItWorks.css'

const Howitworks = () => {
  return (
    <div className="first-content">
      <div className="container">
        <h2>How It works</h2>
        <div className="second-wrapper">
          {data.map(item => <Card {...item}/>)}
        </div>
      </div>
    </div>
  )
}

export { Howitworks } 
