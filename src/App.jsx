import React, { Component } from 'react';

import { CharacterListView } from './views';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>Async Redux API Calls</h1>
        <div className="char-list">
          <CharacterListView />
        </div>
      </div>
    );
  }
}

export default App;
