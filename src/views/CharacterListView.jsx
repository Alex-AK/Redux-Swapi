import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { CharacterList } from '../components';
import { FETCH_DATA, FETCH_DATA_COMPLETE, FETCH_DATA_FAIL } from '../actions';
import { charsReducer } from '../reducers/starWarsReducer';

class CharacterListView extends React.Component {
  componentDidMount() {
    // call our action
  }

  render() {
    return this.props.fetching ? (
      <Loader type="Ball-Triangle" color="grey" height="90" width="60" />
    ) : (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching
});

export default connect(
  mapStateToProps,
  { charsReducer }
)(CharacterListView);
