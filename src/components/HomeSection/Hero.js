import React from 'react'
import './Hero.css'
import { TiStar } from "react-icons/ti";
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Hero = () => {
  return (
    <div className="main">
      <div className='box'>
        <div className='text'>
          <h1>Luxury Hotels</h1>
          <p>Welcome to the ultimate destination for luxury and comfort! Our website is dedicated to helping you discover and book the finest 5-star hotels around the world. We understand that your stay should be nothing short of exceptional, and we’re committed to ensuring just that. With our curated selection of top-tier hotels, your dream vacation is just a click away.</p>
          <Link to='/hotels'>
          <button><TiStar/><TiStar/><TiStar/><TiStar/><TiStar/></button>
          </Link>
        </div>
      </div>
      <div className='image'>
        <img src="3vmf3obn.png" alt="" className='slide' />
      </div>
    </div>
  )
}

export default Hero

