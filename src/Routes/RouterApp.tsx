import { Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login"
import NotFound from "../pages/NotFound/NotFound"
import { PrivateRoutes, PublicRoutes } from "../models/routes/routes"
import PokemonList from "../pages/Pokemons/PokemonList/PokemonList"
import FavoritePokemonsList from "../pages/Pokemons/FavoritePokemons/FavoritePokemonsList"
import AuthGuard from "../guards/auth.guard"
import Menu from "../containers/Menu/Menu"

const RouterApp = () => {

    const menuItems = [
        { title: 'Lista de favoritos', url: PrivateRoutes.FAVORITE_POKEMONS },
    ];

  return (
    <>
        <Menu items={menuItems} />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
            </Route>
                <Route path={PrivateRoutes.POKEMON_LIST} element={<PokemonList />} />
                <Route path={PrivateRoutes.FAVORITE_POKEMONS} element={<FavoritePokemonsList />} />
        </Routes>
    </>
  )
}

export default RouterApp