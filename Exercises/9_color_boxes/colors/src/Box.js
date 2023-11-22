import React, { Component } from "react";
import "./Box.css";
import { randColor } from "./helper"

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { color: randColor() };
        this.handleClick = this.handleClick.bind(this);
    }
    changeColor() {
        this.setState({ color: randColor() });
    }
    handleClick() {
        this.changeColor()
    }
    render() {
        return (
            <div onClick={this.handleClick} className="Box">
                <div className={this.state.color}>
                </div>
            </div>
        )
    }
}
export default Box;