import CardList from "../../../../containers/Cards/CardList"
import { Pokemon } from "../../../../models/pokemon/pokemon"
import { pokemonList } from "../../../../mocks/pokemons"


const PokemonState: Pokemon[] = pokemonList

const PokemonFetcher = () => {
  return (
    <>
        <div className="flex flex-col">
            <div className="ml-8 text-3xl font-medium my-24">Listado de pokemones</div>
        </div>
        <div className="self-center container p-8 rounded-md">
            <CardList pokemons={PokemonState} />
        </div>
    </>
  )
}

export default PokemonFetcher