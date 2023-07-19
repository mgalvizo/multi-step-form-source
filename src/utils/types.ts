export type PersonalInfoType = {
    name: string;
    email: string;
    phone: string;
};

type Plan = 'arcade' | 'advanced' | 'pro' | '';
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

export type PickAddonsType = {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
};

// Form data shape
export type FormData = {
    personalInfo: PersonalInfoType;
    selectPlan: SelectPlanTypeData;
    pickAddons: PickAddonsType;
    isComplete: boolean;
};

// Store state shape
export type FormState = {
    form: FormData;
};
