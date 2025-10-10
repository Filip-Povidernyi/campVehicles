import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: '',
    equipment: {
        airConditioner: false,
        transmission: false,
        kitchen: false,
        TV: false,
        shower: false,
    },
    form: ''
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            return { ...state, ...action.payload }
        },
        resetFilter: () => initialState,
    },
});


export const { setFilter, resetFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;