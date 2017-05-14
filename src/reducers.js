import { combineReducers } from 'redux';

import {
  POKEMONS_FETCH_REQUESTED,
  POKEMONS_FETCH_RECEIVED
} from './actions';

const initialPokemonsState = {
  pokemons: [],
  isFetching: false
}

function pokemons (state=initialPokemonsState, action) {
  switch(action.type) {
    case POKEMONS_FETCH_REQUESTED:
      return {
        ...state,
        isFetching: true,
      }
    case POKEMONS_FETCH_RECEIVED:
      return {
        ...state,
        pokemons: action.pokemons,
        isFetching: false
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  pokemons
});

export default rootReducer;
