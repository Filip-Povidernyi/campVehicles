import { createSlice } from "@reduxjs/toolkit";
import { fetchAllVehicles } from "../api/fetchVehicles";

const initialState = {
    items: {},
    isLoading: false,
    error: null,
};


const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchAllVehicles.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllVehicles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchAllVehicles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});


export const vehiclesReducer = vehiclesSlice.reducer;