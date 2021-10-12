import React from "react";
import "./GameSettingsMenu.cs";

class GameSettingsMenu extends React {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            showCustomSettingsMenu: false
        };
    }

    render = () => {
        return (
            <div>

                {this.state.showCustomSettingsMenu ? this.getCustomMenu : null}
            </div>
        );
    }

    getCustomMenu = () => {
        return (
            <div></div>
        );
    }
}