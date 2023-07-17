import { createSlice } from '@reduxjs/toolkit';
import { FormState, FormData } from '../../utils/types';

const initialState = {
    yourInfo: {
        name: '',
        email: '',
        phone: '',
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateYourInfo: (state: FormData, action) => {
            state.yourInfo = action.payload;
        },
    },
});

export const { updateYourInfo } = formSlice.actions;

const getYourInfo = (state: FormState) => {
    return state.form.yourInfo;
};

export { getYourInfo };

export default formSlice.reducer;
