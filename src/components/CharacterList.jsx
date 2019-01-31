import React from 'react';
import Character from './Character';

const CharacterList = props => {
  return props.characters.map(character => {
    return <Character key={character.name} character={character} />;
  });
};

export default CharacterList;
