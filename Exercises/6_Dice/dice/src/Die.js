import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne } from '@fortawesome/free-solid-svg-icons';
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons';
import { faDiceThree } from '@fortawesome/free-solid-svg-icons';
import { faDiceFour } from '@fortawesome/free-solid-svg-icons';
import { faDiceFive } from '@fortawesome/free-solid-svg-icons';
import { faDiceSix } from '@fortawesome/free-solid-svg-icons';


class Die extends Component{
    render(){       
        return(            
            <div>                                
                <FontAwesomeIcon icon={this.props.num} />                  
            </div>
        )
    }
}
export default Die;