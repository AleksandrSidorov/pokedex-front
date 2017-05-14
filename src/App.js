import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestPokemons } from './actions';

import PokemonsList from './PokemonsList';

class App extends Component {
  componentDidMount() {
    this.props.requestPokemons();
  }

  render() {
    return (
      <div>
        <h1>Pokemons</h1>
        <PokemonsList pokemons={this.props.pokemons} />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    pokemons: state.pokemons.pokemons,
    isFetching: state.pokemons.isFetching
  }
}

function mapDispatchToProps (dispatch) {
  return {
    requestPokemons: () => dispatch(requestPokemons())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
