import { createSlice } from "@reduxjs/toolkit";
import { ListPokemon } from "../../models/pokemon/pokemon.model";

export const PokemonEmptyState: ListPokemon[] = []

export const pokemonSlice = createSlice({
    name: 'favorite-pokemon',
    initialState: PokemonEmptyState,
    reducers: {
        addFavoritePokemon: (state, action) => {
            const newFavoritePokemon: ListPokemon = {
                ...action.payload,
                isFavorite: true
            };
            state.push(newFavoritePokemon)
        },
        removeFavoritePokemon: (state, action) => {
            const deletedPokemon = action.payload;
            return state.filter(pokemon => pokemon.name !== deletedPokemon)
        }
    }
})

export const { addFavoritePokemon, removeFavoritePokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;