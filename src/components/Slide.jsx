import React, { useState } from 'react'

const Slide = ({id,name}) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide + 1)
  }

  const goToPreviousSlide = () => {
    setCurrentSlide(currentSlide - 1)
  }

  const restartSlides = () => {
    setCurrentSlide(0)
  }
  

  return (
    <div>
      {name}
      {/* <h1>{topFive[currentSlide].name}</h1>
      <p>{topFive[currentSlide].summary}</p>

      <button onClick={goToPreviousSlide} disabled={currentSlide === 0}>
        Previous
      </button>
      <button
        onClick={goToNextSlide}
        disabled={currentSlide === topFive.length - 1}
      >
        Next
      </button>
      <button onClick={restartSlides} disabled={currentSlide === 0}>
        Restart
      </button> */}
    </div>
  )
}

export default Slide;
