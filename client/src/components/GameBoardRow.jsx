import React from 'react';
import PropTypes from 'prop-types';

import GameBoardTile from './GameBoardTile';

const GameBoardRow = ({ layout }) => (
  <tr>
    {layout.map(tile => <GameBoardTile type={tile} />)}
  </tr>
);

GameBoardRow.propTypes = {
  layout: PropTypes.arrayOf().isRequired,
};

export default GameBoardRow;
