import React, { Component } from 'react';
import { CharacterListView } from './views';
import headerImage from './styles/header-image.png';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav>
          <img src={headerImage} alt="Storm trooper header image" />
        </nav>
        <CharacterListView />
        <footer>
          <p>
            Async Redux API Calls <span>|</span>
            <a href="https://github.com/alex-ak">Alex King</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
