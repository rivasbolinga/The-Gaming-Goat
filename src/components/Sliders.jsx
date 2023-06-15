import React, { useContext } from 'react'
import { GamesContext } from '../context/data_context'
import { Slide } from './index'

const Sliders = () => {
  const gamesData = useContext(GamesContext)

  const topFive = gamesData.filter((game) => game.images.length > 0)
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
    <section className="sliders-section">
      {topFive.slice(0, 5).map((game) => {
        return (
          <Slide
            key={game.id}
            id={game.id}
            name={game.name}
            images={game.images}
            summary={game.summary}
          />
        )
      })}
    </section>
  )
}

export default Sliders
