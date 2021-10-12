import React from 'react';
import MinesweeperGridTile from './MinesweeperGridTile/MinesweeperGridTile';

/*
    props:
        settings - a MinesweeperSettings result
        gameInstance - a Minesweeper instance
*/
class MinesweeperGrid extends React {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render = () => {
        return (
            <div className="mainGrid">
                {this.generateGrid()}
            </div>
        )
    }

    generateGrid = () => {
        let result = [];
        let rows = [];

        for (let row = 0; row < this.props.settings.gridWidth; row++) {
            let rowObjs = [];

            for (let column = 0; column < this.props.settings.gridHeight; column++) {
                rowObjs.push(<MinesweeperGridTile 
                    gameInstance={this.props.gameInstance} 
                />);
            }

            rows.push(rowObjs);
        }

        for (let row of rows) {
            result.push(<div>{row}</div>);
        }

        return result;
    }
}

export default MinesweeperGrid;