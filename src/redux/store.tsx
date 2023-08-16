import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { LoggedUser } from "../models/users/logged-user.model";
import { userSlice } from "./states/user.state";
import { pokemonSlice } from "./states/pokemon.state";
import { Pokemon } from "../models/pokemon/pokemon.model";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: "pokedex",
    storage,
    whitelist: ["user", "pokemon"]
}

export interface AppStore {
    user: LoggedUser;
    pokemon: Pokemon[];
}

const reducer = combineReducers({
    user: userSlice.reducer,
    pokemon: pokemonSlice.reducer
})

const persistedReducer = persistReducer<AppStore, AnyAction>(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)