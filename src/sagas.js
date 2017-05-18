import { put, call, all, fork, take } from 'redux-saga/effects';
import * as actions from './actions';
import api from './api';

import { getNextUrl } from './selectors';
// Sagas
export function* getPokemons() {
  try {
    const pokemonsList = yield call(api.getPokemons);
    yield put(actions.getUrls(pokemonsList));
    const pokemons = yield all(pokemonsList.results.map(item => {
      return call(api.getPokemonInfo, item.name);
    }));
    yield put(actions.receivePokemons(pokemons));
  }
  catch (err) {
    yield put(actions.receivePokemonsFailed(err.message));
  }
}

export function* getMorePokemons() {
  const nextUrl = getNextUrl();
  try {
    const pokemonsList = yield call(api.getMorePokemons, nextUrl);
    yield put(actions.getUrls(pokemonsList));
    const pokemons = yield all(pokemonsList.results.map(item => {
      return call(api.getPokemonInfo, item.name);
    }));
    yield put(actions.receivePokemons(pokemons));
  }
  catch (err) {
    yield put(actions.receivePokemonsFailed(err.message));
  }
}

// Watchers
export function* watchFetchPokemons() {
  while (true) {
    yield take(actions.POKEMONS_FETCH_REQUESTED);
    yield call(getPokemons);
  }
}

export function* watchFetchMorePokemons() {
  while (true) {
    yield take(actions.POKEMONS_FETCH_MORE_REQUESTED);
    yield call(getMorePokemons);
  }
}

// Export Root Saga
export default function* rootSaga() {
  yield all([
    fork(watchFetchPokemons),
    fork(watchFetchMorePokemons)
  ])
}
