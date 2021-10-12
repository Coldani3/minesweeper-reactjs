import Tile from "Tile.js";

class Minesweeper {
    constructor(settings) {
        this.bombTiles = [];
        this.flaggedTiles = [];
        this.settings = settings; 
    }

    locationHasBomb(gridX, gridY) {
        for (let tile of this.bombTiles) {
            if (tile.gridX === gridX && tile.gridY === gridY) {
                return true;
            }
        }

        return false;
    }
}