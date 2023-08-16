import CardList from "../../../../containers/Cards/CardList"
import usePokemon from "../../../../hooks/usePokemon"


//const PokemonState: Pokemon[] = pokemonList

const PokemonFetcher = () => {

  const { pokemons } = usePokemon()

  return (
    <>
        <div className="flex flex-col">
            <div className="ml-8 text-3xl font-medium my-24">Listado de pokemones</div>
        </div>
        <div className="self-center container p-8 rounded-md">
            <CardList pokemons={pokemons} />
        </div>
    </>
  )
}

export default PokemonFetcher