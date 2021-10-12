import React from "react";

/* 
    props:
        pressed: is this tile pressed (ie. use the indented style)
        gameInstance: instance of Minesweeper
        tileCoords: instance of Tile that describes the coordinates of this tile
*/
class MinesweeperGridTile extends React {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render = () => {
        return (
            <div 
                className={this.getStyle()} 
                onClick={this.props.gameInstance.pressTile(this.props.tileCoords.gridX, this.props.tileCoords.gridY)} 
                onContextMenu={this.props.gameInstance.flagTile(this.props.tileCoords.gridX, this.props.tileCoords.gridY)}>
            </div>
        )
    }

    getStyle = () => {
        return this.props.pressed ? "tile pressedTile" : "tile";
    }
}

export default MinesweeperGridTile;