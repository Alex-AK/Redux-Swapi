import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { CharacterList } from '../components';
import { fetchData } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return this.props.fetching ? (
      <Loader type="Ball-Triangle" color="grey" height="50" />
    ) : (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  { fetchData }
)(CharacterListView);
