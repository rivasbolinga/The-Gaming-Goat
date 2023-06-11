import React, { createContext, useContext, useEffect } from 'react';

const initialState= {
  gameList: [],
  top_five: [],
}

const GamesContext = createContext();

export const GamesProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/games.json')
    const data = await response.json()
    setGames(data.slice(0, 5))
  }

  fetchData()
}, [])

return (
  <GamesContext.Provider value={{}}>
    {children}
  </GamesContext.Provider>
)
}

export const useGamesContext = () => {
  return useContext(GamesContext)
}