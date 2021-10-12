import Tile from "./Tile.js";

//Minesweeper game instance
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

    locationIsFlagged(gridX, gridY) {
        for (let tile of this.flaggedTiles) {
            if (tile.gridX === gridX && tile.gridY === gridY) {
                return true;
            }
        }

        return false;
    }

    populateField(initialClickX, initialClickY) {
        for (let i = 0; i < this.settings.bombCount; i++) {
            let bombX = Math.floor(Math.random() * this.settings.gridWidth);
            let bombY = Math.floor(Math.random() * this.settings.gridHeight);

            //avoid having two bombs in the same place and avoid generating a bomb where the user first clicked
            if (!this.locationHasBomb(bombX, bombY) && (bombX !== initialClickX && bombY !== initialClickY)) {
                this.bombTiles.push({
                    x: bombX,
                    y: bombY
                })
            } else {
                i--;
                continue;
            }
        }
    }
}

export default Minesweeper;