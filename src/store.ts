import { configureStore } from '@reduxjs/toolkit';
import formReducer from './components/Form/formSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
    },
});

export default store;
