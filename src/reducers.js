import { combineReducers } from 'redux';

import {
  POKEMONS_FETCH_REQUESTED,
  POKEMONS_FETCH_MORE_REQUESTED,
  POKEMONS_FETCH_RECEIVED,
  POKEMONS_FILTER_BY_NAME,
  POKEMONS_FILTER_BY_TYPE,
  FILTER_TYPE_ADD,
  FILTER_TYPE_REMOVE,
  API_GET_URLS,
} from './actions';

const initialPokemonsState = {
  pokemons: [],
  nameFilter: '',
  typeFilter: [],
  isFetching: false,
  prevUrl: null,
  nextUrl: null
}

function pokemons (state=initialPokemonsState, action) {
  switch(action.type) {
    case POKEMONS_FETCH_REQUESTED:
      return {
        ...state,
        isFetching: true,
      }
    case POKEMONS_FETCH_MORE_REQUESTED:
      return {
        ...state,
        isFetching: true
      }
    case POKEMONS_FETCH_RECEIVED:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.pokemons],
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
    case FILTER_TYPE_ADD:
      const resultFilter = state.typeFilter.indexOf(action.typeName) === -1
        ? [...state.typeFilter, action.typeName]
        : [...state.typeFilter]
      return {
        ...state,
        typeFilter: resultFilter
      }
    case FILTER_TYPE_REMOVE:
      return {
        ...state,
        typeFilter: state.typeFilter.filter((item) => item !== action.typeName)
      }
    case API_GET_URLS:
      return {
        ...state,
        prevUrl: action.prevUrl,
        nextUrl: action.nextUrl
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  pokemons
});

export default rootReducer;
