/* Dungeon class should:
  have a matrix representing the dungeon layout
  have all of the room tiles
  have knowledge of which room the player character is in
  be able to move the player character

*/

export default class Dungeon {
  constructor() {
    // this will be unique for every dungeon subclass
    this.playerLocation = [];
    this.layout = [];
    this.tiles = {};
  }
  movePC(newLocation) {
    this.playerLocation = newLocation;
  }
  isLocationValid([newX, newY]) {
    return !!this.layout[newX][newY];
  }
}
