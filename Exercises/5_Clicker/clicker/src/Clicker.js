import React, {Component} from "react";

class Clicker extends Component{
   constructor(props){
    super(props);
    this.state = {num: 1};                   
    this.click = this.click.bind(this);   
   }
   click(e) {
    let rand = Math.floor(Math.random()*10) + 1;    // get random number
    this.setState ({num : rand})       // update state with new num
           
}
    render() {  
        const num = this.state.num;     
        return(
            <div>
                <h1>Number is {num}</h1>
               {num === 7 
                ? <h2>'YOU WIN!'</h2>
                : <button onClick={this.click}>Random number</button>
               }
                
            </div>
        )
    }
}
export default Clicker;