import React, { createContext, useContext, useEffect } from 'react';
import { 
  GET_GAMES_BEGIN,
  GET_GAMES_SUCCESS,
  GET_GAMES_ERROR
 } from '../actions';
const initialState= {
  games_list: [],
  top_five: [],
  games_loading:false,
  games_error:false
}

const GamesContext = createContext();

export const GamesProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  const fetchGames = async() => {
    dispatch({type:GET_GAMES_BEGIN})
   
  }

return (
  <GamesContext.Provider value={{}}>
    {children}
  </GamesContext.Provider>
)
}

export const useGamesContext = () => {
  return useContext(GamesContext)
}