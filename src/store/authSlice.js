import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        sessionID: false,
    },
    reducers: {
        setIsAuthorized(state, action) {
            state.sessionID = action.payload.session_id
        },
    }
})

export const { setSessionID } = authSlice.actions;

export default authSlice.reducer;