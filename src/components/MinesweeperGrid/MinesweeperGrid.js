import React from 'react';

/*
    props:
        settings - a MinesweeperSettings result
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
        for (let row = 0; row < this.props.settings.gridWidth; row++) {
            for (let column = 0; column < this.props.settings.gridHeight; column++) {

            }
        }
    }
}

export default MinesweeperGrid;