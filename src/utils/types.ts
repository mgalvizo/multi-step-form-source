export type YourInfoType = {
    name: string;
    email: string;
    phone: string;
};

// Form data shape
export type FormData = {
    yourInfo: YourInfoType;
};

// Store state shape
export type FormState = {
    form: FormData;
};
