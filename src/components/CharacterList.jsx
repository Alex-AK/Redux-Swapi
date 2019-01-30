import React from 'react';
import { connect } from 'react-redux';
import Character from './Character';
import { charsReducer } from '../reducers/starWarsReducer';

const CharacterList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  characters: state.charsReducer.characters
});

export default connect(
  mapStateToProps,
  { charsReducer }
)(CharacterList);
