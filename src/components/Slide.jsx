import React, { useState } from 'react'

const Slide = ({id,name, images, summary}) => {

  // console.log(url)
  // const [currentSlide, setCurrentSlide] = useState(0)

  // const goToNextSlide = () => {
  //   setCurrentSlide(currentSlide + 1)
  // }

  // const goToPreviousSlide = () => {
  //   setCurrentSlide(currentSlide - 1)
  // }

  // const restartSlides = () => {
  //   setCurrentSlide(0)
  // }
  

  return (
    <div className="slide-component">
      <img
        className="slide-image"
        alt="top 5 game"
        src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${images[0]}.jpg`}
      />
      <div className="slide-details-container">
        <div className="slide-top-5-tag">Top 5</div>
        <h1 className="slide-game-name">{name}</h1>
        <p className="slide-game-description">{summary}</p>
        <button type="button">See details &rarr;</button>
      </div>
    </div>
  )
}

export default Slide;
