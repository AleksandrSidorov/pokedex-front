export const POKEMONS_FETCH_REQUESTED = 'POKEMONS_FETCH_REQUESTED';
export const POKEMONS_FETCH_RECEIVED = 'POKEMONS_FETCH_RECEIVED';
export const POKEMONS_FETCH_FAILED = 'POKEMONS_FETCH_FAILED';
export const POKEMONS_FILTER_BY_NAME = 'POKEMONS_FILTER_BY_NAME';
export const POKEMONS_FILTER_BY_TYPE = 'POKEMONS_FILTER_BY_TYPE';

export function requestPokemons() {
  return {
    type: POKEMONS_FETCH_REQUESTED
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
