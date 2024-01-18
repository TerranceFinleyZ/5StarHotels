import React from "react"
import Card from "./Card"
import "./Gallery.css"
import GalleryData from "./GalleryData"


const Gallery = () => {
  return (
    <>
      

      <section className='gallery top'>
        <div className='container grid'>
          {GalleryData.map((value) => {
            return <Card images={value.img} title={value.title} />
          })}
          <div className='more'>
          <button>
            <a href='https://unsplash.com/s/photos/hotel'>
              <h6>See More...</h6>
            </a>
          </button>
        </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
