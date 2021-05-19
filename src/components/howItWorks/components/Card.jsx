import React from 'react'

const Card = ({img, title, description}) => {

  return (
    <div>
      <img src={img} alt="#"/>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export { Card }
