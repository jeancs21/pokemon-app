import { useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../models/routes/routes"

const AuthGuard = () => {
    const userLogged = useSelector((store: AppStore) => store.user)
  return (
    userLogged.email ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
  )
}

export default AuthGuard