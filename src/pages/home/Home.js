import React from 'react'
import Navbar from '../../utils/Navbar'
import Hero from './components/Hero'
import LittleInfo from './components/LittleInfo'
import News from './components/News'
import SomeProducts from './components/SomeProducts'

const Home = () => {
    return (
        <div className="home--wrapper">
            <Navbar />
            <Hero />
            <SomeProducts />
            <News />
            <LittleInfo />
        </div>
    )
}

export default Home