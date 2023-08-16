import { configureStore } from "@reduxjs/toolkit";
import { LoggedUser } from "../models/users/logged-user.model";
import { userSlice } from "./states/user.state";
import { pokemonSlice } from "./states/pokemon.state";
import { Pokemon } from "../models/pokemon/pokemon";

export interface AppStore {
    user: LoggedUser;
    pokemon: Pokemon[];
}

export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer,
        pokemon: pokemonSlice.reducer
    }
})