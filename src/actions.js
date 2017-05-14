export const POKEMONS_FETCH_REQUESTED = 'POKEMONS_FETCH_REQUESTED';
export const POKEMONS_FETCH_RECEIVED = 'POKEMONS_FETCH_RECEIVED';
export const POKEMONS_FETCH_FAILED = 'POKEMONS_FETCH_FAILED';

export function requestPokemons() {
  return {
    type: POKEMONS_FETCH_REQUESTED
  }
}

export function receivePokemons(pokemons) {
  return {
    type: POKEMONS_FETCH_RECEIVED,
    pokemons
  }
}

export function receivePokemonsFailed(err) {
  return {
    type: POKEMONS_FETCH_FAILED,
    err
  }
}
