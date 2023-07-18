export type YourInfoType = {
    name: string;
    email: string;
    phone: string;
};

type Plan = 'arcade' | 'advanced' | 'pro';
type BillingPeriod = 'monthly' | 'yearly';

export type SelectPlanType = {
    plan: Plan;
    billingPeriod: BillingPeriod;
};

// Form data shape
export type FormData = {
    yourInfo: YourInfoType;
    selectPlan: SelectPlanType;
};

// Store state shape
export type FormState = {
    form: FormData;
};
