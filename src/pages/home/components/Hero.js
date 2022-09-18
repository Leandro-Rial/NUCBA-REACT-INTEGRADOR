import React from 'react'

const Hero = () => {
  return (
    <div className='hero--wrapper'>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://bilder.macwelt.de/4276120_original.jpg" className="d-block w-100" alt="M1" />
            <div className="carousel-caption d-md-block">
              <h5>Macbook Air M1</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://s.yimg.com/uu/api/res/1.2/GJzNLOFZQj7kafXmcB6lUg--~B/aD0xMzMzO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-03/c259af32-a0f2-11ec-bbdf-7d706f4f1259.cf.jpg" className="d-block w-100" alt="iPhone 13 PRO MAX" />
            <div className="carousel-caption d-md-block">
              <h5>iPhone 13 PRO MAX</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.teahub.io/photos/full/334-3341911_microsoft-surface-laptop-13-5.jpg" className="d-block w-100" alt="Microsoft surface" />
            <div className="carousel-caption d-md-block">
              <h5>Microsoft Surface Laptop 3</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Hero