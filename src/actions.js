export const POKEMONS_FETCH_REQUESTED = 'POKEMONS_FETCH_REQUESTED';
export const POKEMONS_FETCH_MORE_REQUESTED = 'POKEMONS_FETCH_MORE_REQUESTED';
export const POKEMONS_FETCH_RECEIVED = 'POKEMONS_FETCH_RECEIVED';
export const POKEMONS_FETCH_FAILED = 'POKEMONS_FETCH_FAILED';
export const POKEMONS_FILTER_BY_NAME = 'POKEMONS_FILTER_BY_NAME';
export const POKEMONS_FILTER_BY_TYPE = 'POKEMONS_FILTER_BY_TYPE';
export const FILTER_TYPE_ADD = 'FILTER_TYPE_ADD';
export const FILTER_TYPE_REMOVE = 'FILTER_TYPE_REMOVE';
export const API_GET_URLS = 'API_GET_URLS';

export function requestPokemons() {
  return {
    type: POKEMONS_FETCH_REQUESTED
  }
}

export function requestMorePokemons() {
  return {
    type: POKEMONS_FETCH_MORE_REQUESTED,
  }
}

export const receivePokemons = (pokemons) => {
  return {
    type: POKEMONS_FETCH_RECEIVED,
    pokemons
  }
}

export const receivePokemonsFailed = (err) => {
  return {
    type: POKEMONS_FETCH_FAILED,
    err
  }
}

export const filterPokemonByName = (filter) => {
  return {
    type: POKEMONS_FILTER_BY_NAME,
    filter
  }
}

export const filterPokemonsByType = (filter) => {
  return {
    type: POKEMONS_FILTER_BY_TYPE,
    filter
  }
}

export const addTypeToFilter = (typeName) => {
  return {
    type: FILTER_TYPE_ADD,
    typeName
  }
}

export const removeTypeFromFilter = (typeName) => {
  return {
    type: FILTER_TYPE_REMOVE,
    typeName
  }
}

export const getUrls = (pokemons) => {
  return {
    type: API_GET_URLS,
    prevUrl: pokemons.previous,
    nextUrl: pokemons.next
  }
}
