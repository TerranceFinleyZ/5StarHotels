import React from "react"
import Card from "./Card"
import "./Hotels.css"
import HotelsData from "./HotelsData"
import { TiStar } from "react-icons/ti";


const Hotels = () => {
  return (
    <>
      <section className='hotels top'>
        <h5>Luxury <span>Hotels</span></h5>
        <p><TiStar/><TiStar/><TiStar/><TiStar/><TiStar/></p>
        <h6>These luxury hotels have been meticulously selected as the highest-rated establishments in their respective states. <span>Enjoy</span>!</h6>
        <div className='container grid'>
          {HotelsData.map((value) => {
            return <Card images={value.img} title={value.title} src={value.src} id={value.id} />
          })}
        </div>
      </section>
    </>
  )
}

export default Hotels
