export type YourInfoType = {
    name: string;
    email: string;
    phone: string;
};

type Plan = 'arcade' | 'advanced' | 'pro';
type BillingPeriod = {
    monthly: boolean;
    yearly: boolean;
};

export type SelectPlanTypeData = {
    plan: Plan;
    billingPeriod: BillingPeriod;
};

// Typing for the "Toogle Switch" checkbox since it only returns true or false
export type SelectPlanType = {
    plan: Plan;
    billingPeriod: boolean;
};

// Form data shape
export type FormData = {
    yourInfo: YourInfoType;
    selectPlan: SelectPlanTypeData;
};

// Store state shape
export type FormState = {
    form: FormData;
};
