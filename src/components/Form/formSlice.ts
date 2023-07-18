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
        billingPeriod: {
            monthly: true,
            yearly: false,
        },
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
            state.selectPlan.plan = action.payload.plan;

            if (action.payload.billingPeriod) {
                state.selectPlan.billingPeriod.monthly = true;
                state.selectPlan.billingPeriod.yearly = false;
            } else {
                state.selectPlan.billingPeriod.yearly = true;
                state.selectPlan.billingPeriod.monthly = false;
            }
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
