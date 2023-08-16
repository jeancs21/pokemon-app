import { useSelector } from "react-redux"
import CardList from "../../../../containers/Cards/CardList"
import { AppStore } from "../../../../redux/store"
import NavigateButton from "../../../../containers/Buttons/NavigateButton"
import { PrivateRoutes } from "../../../../models/routes/routes"

const FavoritePokemonFetcher = () => {

    const pokemonList = useSelector((store: AppStore) => store.pokemon)

  return (
    <>
        <div className="flex w-full container my-4 ml-2">
            <NavigateButton path={PrivateRoutes.POKEMON_LIST} buttonText="< Volver al Home" />
        </div>
        <div className="flex flex-col">
            <div className="ml-8 text-3xl font-medium my-16">Tus Favoritos</div>
        </div>
        <div className="self-center container p-8 rounded-md">
            <CardList pokemons={pokemonList} />
        </div>
    </>
  )
}

export default FavoritePokemonFetcher