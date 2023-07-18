import { createSlice } from '@reduxjs/toolkit';
import { FormState, FormData } from '../../utils/types';

const initialState: FormData = {
    personalInfo: {
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
    pickAddons: {
        onlineService: true,
        largerStorage: true,
        customizableProfile: false,
    },
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updatePersonalInfo: (state: FormData, action) => {
            state.personalInfo = action.payload;
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
        updatePickAddons: (state: FormData, action) => {
            state.pickAddons = action.payload;
        },
    },
});

export const { updatePersonalInfo, updateSelectPlan, updatePickAddons } =
    formSlice.actions;

const getPersonalInfo = (state: FormState) => {
    return state.form.personalInfo;
};

const getSelectPlan = (state: FormState) => {
    return state.form.selectPlan;
};

const getPickAddons = (state: FormState) => {
    return state.form.pickAddons;
};

export { getPersonalInfo, getSelectPlan, getPickAddons };

export default formSlice.reducer;
