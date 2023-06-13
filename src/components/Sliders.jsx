import React, { useContext } from 'react'
import { GamesContext } from '../context/data_context'
import { Slide } from './index'

const Sliders = () => {
  const gamesData = useContext(GamesContext)
  return (
    <section className="sliders-section">
      {gamesData.slice(0, 5).map((game) => {
  
        return <Slide key={game.id} id={game.id} name={game.name} images={game.url}/>
      })}
    </section>
  )
}

export default Sliders
