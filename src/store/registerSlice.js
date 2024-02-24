import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        email: "",
        user_id: "",
        phone: "",
    },
    reducers: {
        setEmail(state, action) {
            state.email = action.payload.email
        },
        setPhone(state, action) {
            state.phone = action.payload.phone
        },
        setUserID(state, action) {
            state.user_id = action.payload.user_id
        },
    }
})

export const { setEmail, setPhone, setUserID } = registerSlice.actions;

export default registerSlice.reducer;