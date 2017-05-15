import React from 'react';

const getVisiblePokemons = (pokemons, filterText) => {
  if ( pokemons && filterText ) {
    console.log(pokemons, filterText);
    pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().search(filterText.toLowerCase()) !== -1;
    });
  } else {
    return [];
  }
}

const PokemonsList = ({ pokemons }) => {
  return (
    <ul className="pokemons-wrapper">
      {
        pokemons.map((pokemon, index) => {
          return (
            <li key={index}>
              <div>
                {pokemon.id}
              </div>
              <div className="avatar__background">
                <img className="avatar__img" src={pokemon.sprites.front_default} alt={pokemon.name} />
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
