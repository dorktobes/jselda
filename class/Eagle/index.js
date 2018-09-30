import Dungeon from './../Dungeon/';
import P from './P';

export default class Eagle extends Dungeon {
  constructor() {
    super();
    this.playerLocation = [5, 3];
    this.layout = [
      [null, null, 'A', 'B', null, null, null, null],
      [null, null, null, 'C', null, 'D', 'E', null],
      [null, 'F', 'G', 'H', 'I', 'J', null, null],
      [null, null, 'K', 'L', 'M', null, null, null],
      [null, null, null, 'N', null, null, null, null],
      [null, null, 'O', 'P', 'Q', null, null, null],
    ];
    this.tiles = {
      P,
    };

    this.changeRoom();
  }
}
