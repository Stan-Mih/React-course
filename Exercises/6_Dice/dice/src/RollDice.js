import React, {Component} from "react";
import Die from "./Die";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne } from '@fortawesome/free-solid-svg-icons';
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons';
import { faDiceThree } from '@fortawesome/free-solid-svg-icons';
import { faDiceFour } from '@fortawesome/free-solid-svg-icons';
import { faDiceFive } from '@fortawesome/free-solid-svg-icons';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';

function die(){
    const dies = [faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix];
    const die = dies[Math.floor(Math.random()*dies.length)];
    return die;
}
class RollDice extends Component{
    
    constructor(props){
        super(props);
        this.state = {num: faDiceOne};                   
        this.click = this.click.bind(this);   
       }
       click(e) {
        const dies = [faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix];
        let die = dies[Math.floor(Math.random()*dies.length)];    
        this.setState ({num : die});              
        }

    render(){
        return(
            <div>
                <Die num={die()}/>    
                <Die num={die()}/>   
                <button onClick={this.click}>Roll Dice!</button>          
            </div>
        )
    }
}
export default RollDice;


 
