import React from 'react'
import './About.css'
import { GoArrowRight } from "react-icons/go";
import { DiRuby } from "react-icons/di";

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
            <h4>About Us</h4>
            <h1>
            Welcome to <span>Motive.</span>
            </h1>
            <p>Our mission is to transform ordinary travel into extraordinary experiences. We handpick our hotel partners based on their commitment to excellence, unique offerings, and exceptional service. From opulent city hotels to tranquil beachfront resorts, we offer a curated selection of luxury accommodations to meet the diverse needs of our clientele. At Motive, we understand that luxury is more than just a price tag. It’s about the quality of service, the attention to detail, and the feeling of indulgence. That’s why we work tirelessly to ensure that every booking made through our platform meets the highest standards of luxury.
Our user-friendly platform makes it easy to find and book your perfect luxury hotel. Simply choose your destination, browse our selection of luxury hotels, and book your stay with just a few clicks.
            </p>
            <a href='https://www.youtube.com/watch?v=WvMAKKrqqoE'>
            <button className='secondary-btn'>
              <DiRuby/> Check Out <GoArrowRight/>
            </button>
            </a>
        </div>
        <div className='last'>
            <img src='vwbth3u9.png' alt='' />
        </div>
      </div>    
    </>
  )
}

export default AboutCard

