import { createSlice } from '@reduxjs/toolkit';

const favoriteInitialState = {
    items: [],
};

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: favoriteInitialState,
    reducers: {
        toggleFavorite(state, action) {
            const camper = action.payload;
            const favIndex = state.items.findIndex((fav) => fav.id === camper.id);

            if (favIndex > -1) {
                state.items.splice(favIndex, 1);
            } else {
                state.items.push(camper);
            }
        }
    },
});


export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice;