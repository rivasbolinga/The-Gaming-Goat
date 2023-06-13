import React, { useContext } from 'react'
import { GamesContext } from '../context/data_context'
import { Slide } from './index'

const Sliders = () => {
  const gamesData = useContext(GamesContext)

  return (
    <div>
      {gamesData.slide(0,5).map((game) => {
      
        return 
        <Slide slide={game} />
      })}
    </div>
  )
}

export default Sliders
