import React, { Component } from "react";
import "./CoinContainer.css";
import { choice } from "./helper"; // import only choice form helpers , keeping component React specific
import Coin from "./Coin";


class CoinContainer extends Component {
    static defaultProps = {
        coins: [
            { side: "head", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/US_One_Cent_Obv.png/1024px-US_One_Cent_Obv.png" },
            { side: "tail", imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Lincoln-Cent-Reverse-sheild.png/1024px-Lincoln-Cent-Reverse-sheild.png" }
        ]
    }
    constructor(props) {
        super(props);
        this.state = {
            nFlips: 0,
            nHeads: 0,
            nTails: 0,
            currCoin: null,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin() {
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return {
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "head" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tail" ? 1 : 0),
            }
        })
    }
    handleClick() {
        this.flipCoin();
    }
    render() {
        return (
            <div className="CoinContainer">
                <h2>Lets flip a Coin!</h2>
                {this.state.currCoin && <Coin side={this.state.currCoin.side} imgSrc={this.state.currCoin.imgSrc} />}
                <button onClick={this.handleClick}>Flip me!</button>
                <p>Out of {this.state.nFlips} there are {this.state.nHeads} heads and {this.state.nTails} tails.</p>
            </div>
        )
    }
}
export default CoinContainer;