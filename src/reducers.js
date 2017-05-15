import { combineReducers } from 'redux';

import {
  POKEMONS_FETCH_REQUESTED,
  POKEMONS_FETCH_RECEIVED,
  POKEMONS_FILTER_BY_NAME,
  POKEMONS_FILTER_BY_TYPE
} from './actions';

const initialPokemonsState = {
  pokemons: [],
  nameFilter: '',
  typeFilter: [],
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
    case POKEMONS_FILTER_BY_NAME:
      return {
        ...state,
        nameFilter: action.filter
      }
    case POKEMONS_FILTER_BY_TYPE:
      return {
        ...state,
        typeFilter: action.filter
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  pokemons
});

export default rootReducer;
