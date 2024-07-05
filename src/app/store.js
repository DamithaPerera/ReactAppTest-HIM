import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from '../features/propertySlice';

export default configureStore({
    reducer: {
        properties: propertyReducer,
    },
});