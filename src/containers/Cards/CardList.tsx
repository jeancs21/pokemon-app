import {FunctionComponent} from 'react';
import Card from './Card';
import { Pokemon } from '../../models/pokemon/pokemon';

type Props = {
    pokemons:  Pokemon[];
}

const handleFavorite = (pokemon: Pokemon) => {
    console.log("Pokemon", pokemon)
}


const CardList:FunctionComponent<Props> = (props) => {
  return (
    <div className='flex flex-wrap justify-center'>
        {props.pokemons.map((pokemon, i) => {
            return (
                <Card
                    key={i}
                    name={pokemon.name}
                    type={pokemon.type}
                    image={pokemon.image}
                    onFavorite={() => handleFavorite(pokemon)}
                />
            )
        })}
    </div>
  )
}

export default CardList