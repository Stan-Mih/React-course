import React, {Component} from 'react';
import "./Pokecard.css"

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);   // padding the id number to three digits 

class Pokecard extends Component{
    render() {
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
        return(
            <div className='Pokecard'>  
                <h1 className="Pockecard-tittle">{this.props.name}</h1>
                <div className='Pokecard-img-frame'>

                <img className="Pokecard-img"src={imgSrc} alt={this.props.name}/>
                </div>
                <div className="Pokecard-data">Type:{this.props.type}</div>
                <div className="Pokecard-data">XP:{this.props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;