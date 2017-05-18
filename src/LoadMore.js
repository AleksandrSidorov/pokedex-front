import React from 'react';

const LoadMore = ({ requestMorePokemons }) => {
  return (
    <div>
      <button onClick={() => requestMorePokemons()}>Load More</button>
    </div>
  )
}

export default LoadMore;
