import React from 'react'
import './About.css'
import about_img from '../../assets/About.png'
import play_icon from '../../assets/Play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
              {setPlayState(true)}}/>

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow’s Waste Bodies and Terrorists Today</h2>
            <p>Investing in sustainable waste management is crucial for environmental health. By focusing on recycling and community awareness, we can reduce our ecological footprint.
            </p>
            <p>Addressing the roots of terrorism requires understanding and empathy. Providing education and support can help divert individuals from violent paths.
            </p>
            <p>Creating a brighter future involves fostering both environmental and social well-being. Through collaboration and compassion, we can build a safer, cleaner world.
            </p>
        </div>
      
    </div>
  )
}

export default About
