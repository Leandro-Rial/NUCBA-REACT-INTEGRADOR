import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import useWindowResize from '../../../hooks/useWindowResize'
import CardProduct from '../../../utils/CardProduct'

const News = () => {

  const recomendations = useSelector((state) => state.recommended.recommended)

  const { windowWidth } = useWindowResize()

  const showCards = (windowWidth > 850) ? 3 : (windowWidth < 850 && windowWidth > 600) ? 2 : 1

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: showCards,
    slidesToScroll: showCards
  };

  return (
    <div className="news--wrapper">
      <h1 className="news--title">Some recommended products</h1>
      <div className="recommendation--wrapper">
        <Slider {...settings}>
          {
            recomendations.map((recommendation, i) => {
              return <CardProduct {...recommendation} key={i} />
            })
          }
        </Slider>   
      </div>
    </div>
  )
}

export default News