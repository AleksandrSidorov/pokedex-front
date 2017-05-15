import React from 'react';

const getVisiblePokemons = (pokemons, filterText) => {
  if ( pokemons !== [] && filterText !== '' ) {
    return pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().search(filterText.toLowerCase()) !== -1;
    });
  } else if (pokemons !== [] && filterText === '') {
    return pokemons;
  } else {
    return [];
  }
}

const PokemonsList = ({ pokemons, nameFilter }) => {
  const visiblePokemons = getVisiblePokemons(pokemons, nameFilter);
  return (
    <ul className="pokemons-wrapper">
      {
        visiblePokemons.map((pokemon, index) => {
          return (
            <li key={index}>
              <div>
                {pokemon.id}
              </div>
              <div className="avatar__background">
                <img
                  className="avatar__img"
                  alt={pokemon.name}
                  src={pokemon.sprites.front_default}
                 />
              </div>
              <div className="pokemon-card__name">
                {pokemon.name}
              </div>
              <ul>
                {
                  pokemon.types.map((type, index) => {
                    return <li key={index}>{type.type.name}</li>
                  })
                }
              </ul>
            </li>
          )
        })
      }
    </ul>
  )
}

export default PokemonsList;
