import { createSlice } from '@reduxjs/toolkit';

type FormData = {
    name?: null | string;
    email?: null | string;
    phone?: null | string;
};

const initialState = {
    form: {
        name: null,
        email: null,
        phone: null,
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateForm: (state, action) => {
            return { ...state, ...(action.payload as FormData) };
        },
    },
});

export const { updateForm } = formSlice.actions;

export default formSlice.reducer;
