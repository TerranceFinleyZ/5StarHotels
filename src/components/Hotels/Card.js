import React, { useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom"


const Cards = (props) => {
  const [popup, setPopup] = useState(false)

  const toggleModal = () => {
    setPopup(!popup)
  }
  return (
    <>
      <a href={`${props.id}`}>
        <div className='items'>
          <div className='img'>
            <img src={props.images} alt='hotels Image' />
              <i className= 'fas fa-image' onClick={toggleModal}></i>
          </div>
          <div className='title'>
            <h3>{props.title}</h3>
          </div>
          <div className='lup'>
            {props.src}
          </div>
        </div>

        {popup && (
          <div className='popup'>
            <div className='popup-content'>
              <button onClick={toggleModal}>Close</button>
              <img src={props.images} alt='hotels Image' />
            </div>
          </div>
        )}
      </a>
    </>
  )
}

export default Cards