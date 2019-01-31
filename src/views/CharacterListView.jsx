import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { CharacterList } from '../components';
import { fetchData, incrementPage, decrementPage } from '../actions';

class CharacterListView extends React.Component {
  componentDidMount() {
    setTimeout(() => this.props.fetchData(this.props.page), 3000);
  }

  incrementPage = () => {
    if (this.props.page < 9) {
      this.props.incrementPage(this.props.page + 1);
    }
  };

  decrementPage = () => {
    if (this.props.page > 1) {
      this.props.decrementPage(this.props.page - 1);
    }
  };

  render() {
    return this.props.fetching ? (
      <div className="loader">
        <Loader type="Ball-Triangle" color="grey" height="50" />
      </div>
    ) : (
      <div className="card-list">
        <CharacterList characters={this.props.characters} />
        <div className="button-container">
          <button
            className={this.props.page === 1 ? 'disable' : null}
            onClick={this.decrementPage}
          >
            Previous
          </button>
          {this.props.smallFetching && (
            <Loader type="Ball-Triangle" color="grey" height="20" />
          )}
          <button
            className={this.props.page === 8 ? 'disable' : null}
            onClick={this.incrementPage}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  fetching: state.charsReducer.fetching,
  smallFetching: state.charsReducer.smallFetching,
  error: state.charsReducer.error,
  page: state.charsReducer.page
});

export default connect(
  mapStateToProps,
  { fetchData, incrementPage, decrementPage }
)(CharacterListView);
