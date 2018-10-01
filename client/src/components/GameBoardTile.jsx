import React from 'react';
import PropTypes from 'prop-types';

import textures from './textures';


const GameBoardTile = ({ type }) => {
  const Tile = textures[type];

  return <Tile />;
};

GameBoardTile.propTypes = {
  type: PropTypes.string.isRequired,
};

export default GameBoardTile;
