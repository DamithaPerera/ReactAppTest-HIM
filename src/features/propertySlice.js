import { createSlice } from '@reduxjs/toolkit';
import propertiesData from '../data/properties.json';

export const propertySlice = createSlice({
    name: 'properties',
    initialState: {
        list: propertiesData,
        filteredList: propertiesData,
        filterText: '',
    },
    reducers: {
        setFilterText: (state, action) => {
            state.filterText = action.payload;
            state.filteredList = state.list.filter(property =>
                property.name.toLowerCase().includes(action.payload.toLowerCase()) ||
                property.description.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
    },
});

export const { setFilterText } = propertySlice.actions;

export default propertySlice.reducer;