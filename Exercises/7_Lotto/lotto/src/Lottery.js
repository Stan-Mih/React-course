import React, {Component} from "react";
import Ball from"./Ball";
import "./Lottery.css"

class Lottery extends Component{
    render(){
        return (
            <div className="Lotto">   
                <Ball num = {17}/>
                <Ball num = {5}/>
                <Ball num = {9}/>
                <Ball num = {11}/>
                <Ball num = {18}/>
            </div>
        ) 
    }
}

export default Lottery;