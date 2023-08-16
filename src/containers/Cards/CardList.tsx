import {FunctionComponent} from 'react';
import Card from './Card';
import { ListPokemon } from '../../models/pokemon/pokemon.model';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoritePokemon, removeFavoritePokemon } from '../../redux/states/pokemon.state';
import EmptyFavoritePokemonList from '../../pages/Pokemons/FavoritePokemons/components/EmptyFavoritePokemonList';
import { AppStore } from '../../redux/store';


type Props = {
    pokemons:  ListPokemon[];
}

const CardList:FunctionComponent<Props> = (props) => {

/*const dispatch = useDispatch()

const favorites = useSelector((store: AppStore) => store.pokemon)

const isPokemonInFavorites = (pokemon: Pokemon): boolean => {
    return favorites.some((favoritePokemon) => favoritePokemon.name === pokemon.name)
};

const handleFavorite = (pokemon: Pokemon) => {
    if (isPokemonInFavorites(pokemon)) {
        dispatch(removeFavoritePokemon(pokemon.name));
    } else {
        dispatch(addFavoritePokemon(pokemon));
    }
}*/

  return (
    <div className='flex flex-wrap justify-center'>
        {props.pokemons.length > 0 ? props.pokemons.map((pokemon, i) => {
            return (
                <Card
                    key={i}
                    pokemon={pokemon}
                    //type={pokemon.type}
                    //image={pokemon.image}
                    //isFavorite={isPokemonInFavorites(pokemon)}
                    //onFavorite={() => handleFavorite(pokemon)}
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