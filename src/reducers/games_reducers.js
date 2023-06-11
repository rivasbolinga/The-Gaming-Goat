import { GET_GAMES_BEGIN, GET_GAMES_SUCCESS, GET_GAMES_ERROR } from '../actions'

const games_reducers = (state, action) => {
if (action.type === GET_GAMES_BEGIN) {
  return {...state, games_loading: true}
} if (action.type ===   GET_GAMES_SUCCESS) {
  return {...state, games_loading: false, games_error: false, games_list: action.payload}
} if (action.type === GET_GAMES_ERROR) {
  return { ...state, games_error: true, games_loading: false}
}
 throw new Error(`No Matching "${action.type}" - action type`)
}

export default games_reducers;