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
    this.currentRoom = null;
  }
  movePC(newLocation) {
    this.playerLocation = newLocation;
    this.changeRoom();
  }
  changeRoom() {
    const [playerX, playerY] = this.playerLocation;
    const currentTile = this.layout[playerX][playerY];
    const Tile = this.tiles[currentTile];
    if (!this.tiles[currentTile].layout) {
      this.tiles[currentTile] = new Tile();
    }
    this.currentRoom = this.tiles[currentTile];
  }
  isLocationValid([newX, newY]) {
    return !!this.layout[newX][newY];
  }
}
