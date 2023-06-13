import React, { useContext } from 'react'
import { GamesContext } from '../context/data_context'
import { Slide } from './index'

const Sliders = () => {
  const gamesData = useContext(GamesContext)
   const topFive = gamesData.slice(0, 5);
   console.log(topFive);
  return (
     <Slide topFive={topFive} />
  )
}

export default Sliders
