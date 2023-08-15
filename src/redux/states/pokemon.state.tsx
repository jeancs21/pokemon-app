import { createSlice } from "@reduxjs/toolkit";
import { pokemonList } from "../../mocks/pokemons";
import { Pokemon } from "../../models/pokemon/pokemon";

export const PokemonEmptyState: Pokemon = {
    name: "",
    type: "",
    image: ""
}

export const PokemonState: Pokemon[] = pokemonList

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: PokemonState,
    reducers: {
        
    }
})