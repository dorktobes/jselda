import React from 'react';
import PropTypes from 'prop-types';

import MiniMapRow from './MiniMapRow';

const MiniMap = ({ layout, playerLocation: [pcX, pcY] }) => (
  <table className="mini-map wrapper">
    <tbody>
    {layout.map((row, i) => <MiniMapRow layout={row} playerLocation={(i === pcX) ? pcY : null} />)}
    </tbody>
  </table>
);

MiniMap.propTypes = {
  playerLocation: PropTypes.arrayOf(PropTypes.Int).isRequired,
  layout: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([null, PropTypes.string]),
    ),
  ).isRequired,

};

export default MiniMap;
