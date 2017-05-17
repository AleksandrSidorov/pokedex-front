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

const getFilteredByType = (pokemons, typeFilter) => {
  if ( pokemons !== [] && typeFilter.length > 0 ) {
    return pokemons.filter( pokemon => {
      console.log('typeFilter', typeFilter);
      const flatTypes = pokemon.types.reduce( (prev, curr) => {
        return [...prev, ...curr.type.name];
      }, [])
      console.log('flatTypes', flatTypes);
      return true;
    });
  } else if (pokemons !== [] && typeFilter.length === 0) {
    return pokemons;
  } else {
    return pokemons;
  }
}

const PokemonsList = ({ pokemons, nameFilter, typeFilter, addTypeToFilter }) => {
  let visiblePokemons = getVisiblePokemons(pokemons, nameFilter);
  visiblePokemons = getFilteredByType(visiblePokemons, typeFilter);
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
                    return (
                      <li
                        key={index}
                        onClick={() => addTypeToFilter(type.type.name)}
                      >
                        {type.type.name}
                      </li>
                    )
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
