import React from 'react';
import PropTypes from 'prop-types';

const MiniMapRoom = ({ isPlayerHere, isRoom }) => {
  let roomsClass = 'mini-map';
  if (isRoom) {
    roomsClass += ' room';
  }
  if (isPlayerHere) {
    roomsClass += ' player-occupied';
  }
  return (
    <td className={roomsClass} />
  );
};

MiniMapRoom.propTypes = {
  isRoom: PropTypes.bool.isRequired,
  isPlayerHere: PropTypes.bool.isRequired,
};

export default MiniMapRoom;
