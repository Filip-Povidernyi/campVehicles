export const selectAllVehicles = state => state.vehicles.items;
export const selectIsLoading = state => state.vehicles.isLoading;
export const selectError = state => state.vehicles.error;

export const selectFilterLocation = state => state.filters.location;
export const selectFilterEquipment = state => state.filters.equipment;
export const selectFilterForm = state => state.filters.form;