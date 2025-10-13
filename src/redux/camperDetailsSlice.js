import { createSlice } from "@reduxjs/toolkit"
import { fetchVehicleById } from "../api/fetchVehicles";

const initialState = {
    details: null,
    navId: '/catalog',
    isLoading: false,
    error: null,
};

const camperDetailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setNav: (state, action) => {
            state.navId = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchVehicleById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchVehicleById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.details = action.payload;
            })
            .addCase(fetchVehicleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const { setNav } = camperDetailsSlice.actions;
export const detailsReducer = camperDetailsSlice.reducer;