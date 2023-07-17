import { createSlice } from '@reduxjs/toolkit';

type FormData = {
    name?: string;
    email?: string;
    phone?: string;
};

const initialState = {
    form: {
        name: undefined,
        email: undefined,
        phone: undefined,
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
