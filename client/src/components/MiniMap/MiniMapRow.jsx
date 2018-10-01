import React from 'react';
import PropTypes from 'prop-types';

import MiniMapRoom from './MiniMapRoom';

const MiniMapRow = ({ layout, playerLocation }) => (
  <tr>
    {layout.map((room, i) => <MiniMapRoom isRoom={!!room} isPlayerHere={playerLocation === i} />)}
  </tr>
);

MiniMapRow.propTypes = {
  layout: PropTypes.arrayOf(
    PropTypes.oneOfType([null, PropTypes.string]),
  ),
  playerLocation: PropTypes.oneOfType([PropTypes.Int, null]).isRequired,
};

export default MiniMapRow;
