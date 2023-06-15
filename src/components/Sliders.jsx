import React, { useContext, useRef, useState } from 'react'
import { GamesContext } from '../context/data_context'
import { Slide } from './index'

const Sliders = () => {
  const gamesData = useContext(GamesContext)
  const topFive = gamesData.filter((game) => game.images.length > 0).slice(0, 5)

  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleNextSlide = () => {
    if (currentSlide < topFive.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  return (
    <section className="sliders-section">
      <div className="slider-container">
        <div className="buttons">
          <button
            className="slider-button previous"
            onClick={handlePreviousSlide}
            disabled={currentSlide === 0}
          >
            &larr;
          </button>
          <button
            className="slider-button next"
            onClick={handleNextSlide}
            disabled={currentSlide === topFive.length - 1}
          >
            &rarr;
          </button>
        </div>
        <div
          className="slider-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {topFive.map((game, index) => (
            <div
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              key={game.id}
            >
              <Slide
                index={index}
                name={game.name}
                images={game.images}
                summary={game.summary}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sliders
