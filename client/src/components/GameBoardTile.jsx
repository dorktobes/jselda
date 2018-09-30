import React from 'react';
import PropTypes from 'prop-types';

const GameBoardTile = ({ type }) => <td className={`game-board-tile ${type}`} />;

GameBoardTile.propTypes = {
  type: PropTypes.string.isRequired,
};

export default GameBoardTile;
