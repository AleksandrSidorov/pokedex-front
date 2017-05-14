import { put, call, all, race, fork, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import api from './api';

// Sagas
export function* getPokemons() {
  try {
    const pokemonsList = yield call(api.getPokemons);
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
  yield takeEvery(actions.POKEMONS_FETCH_REQUESTED, getPokemons);
}

// Export Root Saga
export default function* rootSaga() {
  yield all([
    fork(watchFetchPokemons)
  ])
}
