import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
    },
    reducers: {
        setIsAuthorized(state, action) {
            state.isAuthorized = action.payload.is_authorized
        },
    }
})

export const { setIsAuthorized } = authSlice.actions;

export default authSlice.reducer;