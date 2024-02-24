import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
    name: 'plan',
    initialState: {
        type_id: "",
        date: new Date(),
        isFree: true,
    },
    reducers: {
        setTypeID(state, action) {
            state.type_id = action.payload.type_id
        },
        setDate(state, action) {
            state.date = action.payload.date
        },
        setIsFree(state, action) {
            state.isFree = action.payload.is_free
        },
    }
})

export const { setTypeID, setDate, setIsFree } = planSlice.actions;

export default planSlice.reducer;