import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestPokemons } from './actions';
import { Form } from 'antd';
import './App.css';

import SearchFiled from './SearchField';
import FilterByType from './FilterByType';
import PokemonsList from './PokemonsList';
import LoadMore from './LoadMore';

class App extends Component {

  componentDidMount() {
    this.props.requestPokemons();
  }

  render() {
    return (
      <>
        <h1>Pokemons</h1>
        <Form>
          <Form.Item label={'Filter by Name:'}>
            <SearchFiled />
          </Form.Item>
          <Form.Item label={'Selected types:'}>
            <FilterByType />
          </Form.Item>
        </Form>
        <PokemonsList />
        <LoadMore />
      </>
    );
  }
}

const mapDispatchToProps =  dispatch => ({
  requestPokemons: () => dispatch(requestPokemons()),
});

export default connect(null, mapDispatchToProps)(App);
