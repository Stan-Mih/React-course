import React, {Component} from 'react';
import "./Pokecard.css"
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/"
class Pokecard extends Component{
    render() {
        let imgSrc = `${POKE_API}${this.props.id}.png`;
        return(
            <div className='Pokecard'>  
                <h1>{this.props.name}</h1>
                <img className="Pokecard-img"src={imgSrc} alt={this.props.name}/>
                <div>Type:{this.props.type}</div>
                <div>XP:{this.props.base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;