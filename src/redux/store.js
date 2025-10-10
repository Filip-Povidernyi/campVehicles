import { configureStore } from "@reduxjs/toolkit";
import { vehiclesReducer } from "./vehiclesSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        vehicles: vehiclesReducer,
        filter: filterReducer,
    },
});