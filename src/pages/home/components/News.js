import React from 'react'
import { useSelector } from 'react-redux'

const News = () => {

  const recomendations = useSelector((state) => state.recommended.recommended)

  return (
    <div className="news--wrapper">
      <h1>Some recommended products</h1>
      <div className="recommendation--wrapper">
        {
          recomendations.map((recommendation, i) => (
            <div className="card--recommendation" key={i}>
              <picture className="card--img--wrapper">
                <img src={recommendation.img} alt="" className="card--img" />
              </picture>
              <main className="card--main">
                <h3 className="main--title">{recommendation.title}</h3>
                <p className="main--price">{recommendation.price}</p>
              </main>
            </div>
          ))
        }   
      </div>
    </div>
  )
}

export default News