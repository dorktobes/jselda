import Dungeon from './../Dungeon/';
import A from './A';

export default class Eagle extends Dungeon {
  constructor() {
    super();
    this.playerLocation = [5, 2];
    this.layout = [
      [null, null, 'A', 'B', null, null, null, null],
      [null, null, null, 'C', null, 'D', 'E', null],
      [null, 'F', 'G', 'H', 'I', 'J', null, null],
      [null, null, 'K', 'L', 'M', null, null, null],
      [null, null, null, 'N', null, null, null, null],
      [null, null, 'O', 'P', 'Q', null, null, null],
    ];
    this.tiles = {
      A,
    };
  }
}
