import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'
import { List } from 'antd';
import PokemonCard from './PokemonCard';
import { addTypeToFilter } from "./actions";

const PokemonsList = ({ pokemons, addTypeToFilter }) => {
  return (
    <List
      grid={{
        gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 8,
      }}
      dataSource={pokemons}
      renderItem={pokemon =>
        (
          <List.Item>
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              addTypeToFilter={addTypeToFilter}
            />
          </List.Item>
        )
      }
    />
  )
};

const getPokemons = createSelector(
  state => state.pokemons.pokemons,
  state => state.pokemons.nameFilter,
  state => state.pokemons.typeFilter,
  (pokemons, nameFilter, typeFilter) => {
    const filteredPokemons = nameFilter ? pokemons.filter(pokemon => pokemon.name.includes(nameFilter)) : [...pokemons];
    if (filteredPokemons !== [] && typeFilter.length > 0) {
      return filteredPokemons.filter( pokemon => {
        const flatTypes = pokemon.types.reduce( (prev, curr) => {
          return [...prev, curr.type.name];
        }, []);
        return typeFilter.every( el => flatTypes.indexOf(el) > -1);
      });
    } else {
      return filteredPokemons;
    }
  }
);

const mapStateToProps = state => ({
  pokemons: getPokemons(state)
});

const mapDispatchToProps = dispatch => ({
  addTypeToFilter: (typeName) => dispatch(addTypeToFilter(typeName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
