import { createSlice } from "@reduxjs/toolkit";
import { pokemonList } from "../../mocks/pokemons";
import { Pokemon } from "../../models/pokemon/pokemon";

export const PokemonEmptyState: Pokemon[] = []

export const PokemonState: Pokemon[] = pokemonList

export const pokemonSlice = createSlice({
    name: 'favorite-pokemon',
    initialState: PokemonEmptyState,
    reducers: {
        addFavoritePokemon: (state, action) => {
            const newFavoritePokemon: Pokemon = {
                ...action.payload,
                isFavorite: true
            };
            state.push(newFavoritePokemon)
        }
    }
})

export const { addFavoritePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;