export type PersonalInfoTypeData = {
    name: string;
    email: string;
    phone: string;
};

export type PersonalInfoType = PersonalInfoTypeData & {
    isStepTouched: boolean;
};

type Plan = 'arcade' | 'advanced' | 'pro' | '';
type BillingPeriod = {
    monthly: boolean;
    yearly: boolean;
};

export type SelectPlanType = {
    plan: Plan;
    billingPeriod: BillingPeriod;
};

// Typing for the "Toogle Switch" checkbox since it only returns true or false
export type SelectPlanTypeData = {
    plan: Plan;
    billingPeriod: boolean;
};

export type PickAddonsTypeData = {
    onlineService: boolean;
    largerStorage: boolean;
    customizableProfile: boolean;
};

export type PickAddonsType = PickAddonsTypeData & {
    isStepTouched: boolean;
};

// Form data shape
export type FormData = {
    personalInfo: PersonalInfoType;
    selectPlan: SelectPlanType;
    pickAddons: PickAddonsType;
    isFormComplete: boolean;
};

// Store state shape
export type FormState = {
    form: FormData;
};
