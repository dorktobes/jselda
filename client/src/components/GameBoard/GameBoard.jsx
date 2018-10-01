import React from 'react';
import PropTypes from 'prop-types';

import GameBoardRow from './GameBoardRow';

const GameBoard = ({ layout }) => (
  <div className="game-board-wrapper">
    <table>
      <tbody>
        {layout.map(row => <GameBoardRow layout={row} />)}
      </tbody>
    </table>
  </div>
);

GameBoard.propTypes = {
  layout: PropTypes.arrayOf().isRequired,
};

export default GameBoard;
