import React, {Component} from 'react';
import './Dog.css';
import pitbull from './cuteDog.jpg';
class Dog extends Component {
    render(){
        return(
            <div className = "Dog">                
                <h1>DOG!</h1>
                <img className = "Dog-picture" alt="none" src = {pitbull}/>
                <div>ANOTER DIV, BUT NOT IN DOG COMPONENT</div>               
            </div>
        )
    }
}
export default Dog;