import { createSlice } from "@reduxjs/toolkit";
import { LoggedUser } from "../../models/users/logged-user.model";

export const UserEmptyState: LoggedUser = {
    username: "",
    email: "",
    password: "",
}

export const userSlice = createSlice({
    name: 'loggedUser',
    initialState: UserEmptyState,
    reducers: {
        login: (_, action) => {
            return action.payload;
        },
        logout: () => {
            return UserEmptyState
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;