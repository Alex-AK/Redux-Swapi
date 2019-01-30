import React from 'react';

const Character = props => {
  return <div className="card">{props.character.name}</div>;
};

export default Character;
