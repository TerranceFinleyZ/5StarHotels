import React from 'react'
import { IoSunnyOutline } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";

const Slide = () => {
  return (
    <>
      <section className='slider'>
        <div className='control-btn'>
            <button className='prev'>
                <IoSunnyOutline />
            </button>
            <button className='next'>
                <HiOutlineMoon />
            </button>
        </div>
      </section>
    </>
  )
}

export default Slide
