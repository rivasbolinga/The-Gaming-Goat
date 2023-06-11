import React, { useContext } from 'react'
import { GamesContext } from '../context/data_context'

const Sliders = () => {
  const gamesData = useContext(GamesContext)

  return (
    <div>
      {gamesData.map((game) => {
        const { name } = game
        return <h1 key={game.id}>{name}</h1>
      })}
    </div>
  )
}

export default Sliders
