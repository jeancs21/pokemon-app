import {FunctionComponent} from 'react';
import Card from './Card';
import { Pokemon } from '../../models/pokemon/pokemon';
import { useDispatch } from 'react-redux';
import { addFavoritePokemon } from '../../redux/states/pokemon.state';
import EmptyFavoritePokemonList from '../../pages/Pokemons/FavoritePokemons/components/EmptyFavoritePokemonList';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes } from '../../models/routes/routes';

type Props = {
    pokemons:  Pokemon[];
}

const CardList:FunctionComponent<Props> = (props) => {

const dispatch = useDispatch()
const navigate = useNavigate()

const handleFavorite = (pokemon: Pokemon) => {
    console.log("Pokemon", pokemon)
    try {
        dispatch(addFavoritePokemon(pokemon))
        navigate(PrivateRoutes.FAVORITE_POKEMONS)
    }
    catch (error) {
        console.log(error)
    }
}

  return (
    <div className='flex flex-wrap justify-center'>
        {props.pokemons.length > 0 ? props.pokemons.map((pokemon, i) => {
            return (
                <Card
                    key={i}
                    name={pokemon.name}
                    type={pokemon.type}
                    image={pokemon.image}
                    onFavorite={() => handleFavorite(pokemon)}
                />
            )
        })
        :
        <EmptyFavoritePokemonList />
    }
    </div>
  )
}

export default CardList