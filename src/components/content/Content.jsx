import React from 'react'

import './content.css'
import circle from '../../assets/Purple_Circle.png';
import preview from '../../assets/Web_Preview.png';

const Content = () => {
  return (
    <div className="border-line">
    <div className="container">
      <div className="wrapper first-content">
        <div className="content-circle">
          <h1>Landing page UI kit</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
          <button className="btn">Button</button>
        </div>
        <div className="content-info">
            <img className="img-circle" src={circle}/>
            <div className="img-preview">
            <img src={preview}/>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export { Content } 
