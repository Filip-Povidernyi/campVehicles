export const selectAllVehicles = state => state.vehicles.items;
export const selectIsLoading = state => state.vehicles.isLoading;
export const selectError = state => state.vehicles.error;
export const selectTotal = state => state.vehicles.total;
export const selectPerPage = state => state.vehicles.perPage;

export const selectFilter = state => state.filters;

export const selectFavorites = state => state.favorite.items;

export const selectDetails = state => state.details.details;
export const selectNavId = state => state.details.navId;
export const selectLoaderDetails = state => state.details.isLoading;
export const selectErrorDetails = state => state.details.error;