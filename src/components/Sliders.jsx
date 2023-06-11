import React, { useContext } from 'react'
import { GamesContext } from '../context/data_context'

const Sliders = () => {
  const gamesData = useContext(GamesContext)
  console.log(gamesData)
  return <div>Sliders</div>
}

export default Sliders
