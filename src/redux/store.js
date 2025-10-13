import { configureStore } from "@reduxjs/toolkit";
import { vehiclesReducer } from "./vehiclesSlice";
import { filterReducer } from "./filterSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoriteSlice from "./favoriteSlice";
import { detailsReducer } from "./camperDetailsSlice";



const persistConfig = {
    key: "favorites",
    whitelist: ['items'],
    storage,
};

export const favoritePersistReducer = persistReducer(
    persistConfig,
    favoriteSlice.reducer
);


export const store = configureStore({
    reducer: {
        vehicles: vehiclesReducer,
        filter: filterReducer,
        favorite: favoritePersistReducer,
        details: detailsReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    },
});

export const persistor = persistStore(store);