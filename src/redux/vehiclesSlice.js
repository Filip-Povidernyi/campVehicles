import { createSlice } from "@reduxjs/toolkit";
import { fetchAllVehicles } from "../api/fetchVehicles";

const initialState = {
    items: [],
    total: null,
    perPage: 4,
    isLoading: false,
    error: null,
};


const vehiclesSlice = createSlice({
    name: "vehicles",
    initialState,
    reducers: {
        setFilteredItems: (state, action) => {
            state.items = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAllVehicles.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchAllVehicles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload.items;
                state.total = action.payload.total;
            })
            .addCase(fetchAllVehicles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const { setFilteredItems } = vehiclesSlice.actions;
export const vehiclesReducer = vehiclesSlice.reducer;