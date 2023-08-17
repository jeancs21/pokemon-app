import EmptyStateMessage from "../../../../containers/Messages/EmptyStateMessage"
import { PrivateRoutes } from "../../../../models/routes/routes"

const EmptyFavoritePokemonList = () => {
  return (
    <>
        <EmptyStateMessage
            message="No tienes ningún pokemon en tu lista de favoritos. Puedes agregar uno ahora!"
            buttonTitle="Agregar un pokemon a tu lista"
            routePath={PrivateRoutes.POKEMON_LIST} />
    </>
  )
}

export default EmptyFavoritePokemonList