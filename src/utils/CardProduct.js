import React from 'react'

const CardProduct = ({ title, img, desc, price }) => {
  return (
    <div className="card--products">
      <picture className="card--picture">
        <img src={img} alt="" className="card--img" />
      </picture>
      <main className="card--main">
        <h3 className="main--title">{title}</h3>
        <span className="main--price">$ {price}</span>
        <p className="main--description">{desc}</p>
      </main>
    </div>
  )
}

export default CardProduct