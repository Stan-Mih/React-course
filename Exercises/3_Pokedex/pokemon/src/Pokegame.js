import React, {Component} from "react";

class Pokegame extends Component{
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }
    render() {   
        let pokeL = [...this.props.pokemon].length
        let hand1 = [...this.props.pokemon];
        let hand2 = [];

        for(let i = 1; i <= pokeL; i++){
            const set = this.props.pokemon.splice(Math.floor(Math.random()*this.props.pokemon.length));
                if(i %2 ===0){
                    hand1.push(set);
                }else{
                    hand2.push(set);
                }
        }
            console.log(hand1);
           // console.log(pokeL);
        return(
            <h1>Pokegame!</h1>
        )
    }
}

export default Pokegame;