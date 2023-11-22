import React, { Component } from "react";
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <div>
                <img className="Coin-image " src={this.props.imgSrc} alt={this.props.side} />
            </div>
        )
    }
}
export default Coin;