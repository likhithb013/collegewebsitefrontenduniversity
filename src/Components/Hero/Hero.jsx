import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'

function Hero() {
  return (
    <div className='hero container'>
        <div className="Hero-text"></div>
        <h1>We Ensure worst education for a worst world</h1>
        <p>We ensure the worst education to cultivate a disastrous future,
             driven by ignorance and apathy. Our mission is to undermine progress and promote failure,
              one lesson at a time.</p>
              <button className='btn'>Explore more <img src={dark_arrow} alt=" " /></button>
      
    </div>
  )
}

export default Hero
