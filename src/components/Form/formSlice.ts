import { createSlice } from '@reduxjs/toolkit';
import { FormState, FormData } from '../../utils/types';

const initialState: FormData = {
    yourInfo: {
        name: '',
        email: '',
        phone: '',
    },
    selectPlan: {
        plan: 'arcade',
        billingPeriod: 'monthly',
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateYourInfo: (state: FormData, action) => {
            state.yourInfo = action.payload;
        },
        updateSelectPlan: (state: FormData, action) => {
            state.selectPlan = action.payload;
        },
    },
});

export const { updateYourInfo, updateSelectPlan } = formSlice.actions;

const getYourInfo = (state: FormState) => {
    return state.form.yourInfo;
};

const getSelectPlan = (state: FormState) => {
    return state.form.selectPlan;
};

export { getYourInfo, getSelectPlan };

export default formSlice.reducer;
