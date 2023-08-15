import { configureStore } from "@reduxjs/toolkit";
import { LoggedUser } from "../models/users/logged-user.model";
import { userSlice } from "./states/user.state";

export interface AppStore {
    user: LoggedUser;
}

export default configureStore<AppStore>({
    reducer: {
        user: userSlice.reducer
    }
})