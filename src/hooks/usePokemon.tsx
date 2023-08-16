import { useEffect, useState } from "react"
import { DetailPokemon, IndexedPokemon, ListPokemon, PokemonListResponse } from "../models/pokemon/pokemon.model"
import { POKEMON_API_POKEMON_URL, POKEMON_IMAGES_BASE_URL } from "../constants"
import { httpClient } from "../api/httpClient"

const usePokemon = () => {
    const [pokemons, setPokemons] = useState<ListPokemon[]>([])
    const [nextUrl, setNextUrl] = useState<string | null>(POKEMON_API_POKEMON_URL)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPokemon()
    }, [])

    const indexedPokemonToListPokemon = async (indexedPokemon: IndexedPokemon) => {
        const pokedexNumber = parseInt(indexedPokemon.url.replace(`${POKEMON_API_POKEMON_URL}/`, "").replace("/", ""))

        const response = await httpClient.get<DetailPokemon>(indexedPokemon.url);
        const types = response.data.types.map(type => type.type.name);

        const listPokemon: ListPokemon = {
            name: indexedPokemon.name,
            url: indexedPokemon.url,
            image: `${POKEMON_IMAGES_BASE_URL}/${pokedexNumber}.png`,
            pokedexNumber,
            types
        }
        return listPokemon
    }

    const fetchPokemon = async () => {
        if (nextUrl && !loading) {
            setLoading(true)
            const result = await httpClient.get<PokemonListResponse>(nextUrl);
            if (result?.data?.results) {
                const newListPokemons = await Promise.all(result.data.results.map(async pokemon => {
                    return await indexedPokemonToListPokemon(pokemon);
                }));
                setPokemons( () => [
                    //...prevPokemons,
                    ...newListPokemons
                ]);
                setNextUrl(result.data.next);
            }
            setLoading(false)
        }
    }
  return {
    pokemons,
    fetchNextPage: fetchPokemon,
    hasMorePokemon: !!nextUrl,
    loading
  }
}

export default usePokemon