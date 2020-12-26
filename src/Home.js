import React, { useState, useEffect } from 'react';
import './Home.css';
import slider1 from './images/slider1.jpg'
import slider2 from './images/slider2.jpg'
import slider3 from './images/slider3.jpg'
import slider4 from './images/slider4.jpg'
import slider5 from './images/slider5.jpg'
import slider6 from './images/slider6.jpg'
import slider7 from './images/slider7.jpg'
import slider8 from './images/slider8.jpg'
import slider9 from './images/slider9.jpg'

const images = [
  <img key={slider1} src={slider1} alt="first"/>,
  <img key={slider2} src={slider2} alt="second"/>,
  <img key={slider3} src={slider3} alt="third"/>,
  <img key={slider4} src={slider4} alt="fourth"/>,
  <img key={slider5} src={slider5} alt="fifth"/>,
  <img key={slider6} src={slider6} alt="sixth"/>,
  <img key={slider7} src={slider7} alt="seventh"/>,
  <img key={slider8} src={slider8} alt="eight"/>,
  <img key={slider9} src={slider9} alt="ninth"/>
]

function Slides() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect( () => {
      const interval = setInterval(() => {
        setActiveIndex( (current) =>
          current === images.length - 1 ? 0 : current +1 
          )
      }, 4000)
      return () => clearInterval()
    }, [])
    const prevImageIndex = activeIndex ? activeIndex - 1 : images.length - 1
    const nextImageIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

  
    return(
      <div className="slider">
        <div className="slider-image slider-image-prev"
        key={prevImageIndex}>
        {images[prevImageIndex]}
        </div>
        <div className="slider-image"
        key={activeIndex}>
        {images[activeIndex]}
        </div>
        <div className="slider-image"
        key={activeIndex}>
        {images[activeIndex]}
        </div>
        <div className="slider-image"
        key={activeIndex}>
        {images[activeIndex]}
        </div>
        <div className="slider-image"
        key={activeIndex}>
        {images[activeIndex]}
        </div>
        <div className="slider-image"
        key={activeIndex}>
        {images[activeIndex]}
        </div>
        <div className="slider-image"
        key={activeIndex}>
        {images[activeIndex]}
        </div>
        <div className="slider-image"
        key={activeIndex}>
        {images[activeIndex]}
        </div>
        <div className="slider-image slider-image-next"
        key={nextImageIndex}>
        {images[nextImageIndex]}

        </div>  
      </div>
    )   
  }

export default Slides;
