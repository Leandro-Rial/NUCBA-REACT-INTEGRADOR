import React from 'react'

const CardProduct = ({ title, img, description, price }) => {
  return (
    <div className="card--some-products">
      <img src={img} alt="" className="card--img" />
      <main className="card--main">
        <h3 className="main--title">{title}</h3>
        <span className="main--price">{price}</span>
        <p className="main--description">{description}</p>
      </main>
    </div>
  )
}

export default CardProduct