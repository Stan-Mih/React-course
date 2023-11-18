import React, { Component } from "react";
import Die from "./Die";
import './RollDice.css'

import { faDiceOne } from '@fortawesome/free-solid-svg-icons';
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons';
import { faDiceThree } from '@fortawesome/free-solid-svg-icons';
import { faDiceFour } from '@fortawesome/free-solid-svg-icons';
import { faDiceFive } from '@fortawesome/free-solid-svg-icons';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';


class RollDice extends Component {

    constructor(props) {
        super(props);
        this.state = { num1: faDiceOne, num2: faDiceOne, rolling: false };
        this.click = this.click.bind(this);
    }
    click(e) { // pick two new rolls
        const dies = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];
        const die1 = dies[Math.floor(Math.random() * dies.length)];
        const die2 = dies[Math.floor(Math.random() * dies.length)];
        this.setState({ num1: die1, num2: die2, rolling: true }); // set state with new rolls. When we change state the the die is rerendering

        //wait 1 sec then set rollin to false  
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }


    render() {
        return (
            <div className="RollDice">
                <div>
                    <Die num={this.state.num1} rolling={this.state.rolling} />
                    <Die num={this.state.num2} rolling={this.state.rolling} />
                </div>
                <div>
                    <button onClick={this.click} disabled={this.state.rolling}> {/* disabling the button while state rolling is true*/}
                        {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                    </button>
                </div>

            </div>
        )
    }
}
export default RollDice;
