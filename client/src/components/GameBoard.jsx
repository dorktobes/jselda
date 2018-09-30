import React from 'react';
import PropTypes from 'prop-types';

import GameBoardRow from './GameBoardRow';

const GameBoard = ({ layout }) => (
  <table>
    <tbody>
      {layout.map(row => <GameBoardRow layout={row} />)}
    </tbody>
  </table>
);

GameBoard.propTypes = {
  layout: PropTypes.arrayOf().isRequired,
};

export default GameBoard;
