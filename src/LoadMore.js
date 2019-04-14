import React from 'react';
import { connect } from "react-redux";
import { Button } from 'antd';
import { requestMorePokemons} from "./actions";

const LoadMore = ({ requestMorePokemons }) => (
  <Button
    type={'primary'}
    onClick={() => requestMorePokemons()}
  >
    {'Load More'}
  </Button>
);

const mapDispatchToProps = dispatch => ({
  requestMorePokemons: () => dispatch(requestMorePokemons()),
});

export default connect(null, mapDispatchToProps)(LoadMore);
