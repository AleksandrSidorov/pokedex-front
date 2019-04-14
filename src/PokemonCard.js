import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const TypesList = ({ types, addTypeToFilter }) => (
  <ul>
    {
      types.map(type => (
          <li
            key={type.type.name}
            onClick={() => addTypeToFilter(type.type.name)}
          >
            {type.type.name}
          </li>
        )
      )
    }
  </ul>
);

const PokemonCard = ({ pokemon, addTypeToFilter }) => (
  <Card
    style={{ width: 200 }}
    cover={<img alt={pokemon.name} src={pokemon.sprites.front_default} />}
  >
    <Meta title={pokemon.name} description={<TypesList types={pokemon.types} addTypeToFilter={addTypeToFilter} />} />
  </Card>
);

export default PokemonCard;
