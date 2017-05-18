const baseUrl = 'http://pokeapi.co/api/v2';

// REST API Calls

// Get Pokemons
function getPokemons() {
  return fetch(`${baseUrl}/pokemon/`)
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

function getMorePokemons(url) {
  return fetch(url)
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

// Get Pokemon Info
function getPokemonInfo(name="") {

  return fetch(`${baseUrl}/pokemon/${name}`)
    .then(res => {
      if(res.ok) {
        return res;
      }
      throw new Error('Network response was not ok.', res.status);
    })
    .then(res => res.json());
}

export default {
  getPokemons,
  getMorePokemons,
  getPokemonInfo
};
