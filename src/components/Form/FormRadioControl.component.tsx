import { JSX } from 'react';
import {
    StyledFormRadioControl,
    StyledFormRadioControlHeading,
    StyledFormRadioControlBillingQuantity,
    StyledFormRadioControlExtraText,
} from '../styled/Form/FormRadioControl';

interface FormRadioControlProps {
    children?: JSX.Element;
    labelText: string;
    billingQuantity: string;
    isMonthly: boolean;
    icon: JSX.Element;
}

const FormRadioControl = ({
    children,
    labelText,
    billingQuantity,
    isMonthly,
    icon,
}: FormRadioControlProps) => {
    return (
        <StyledFormRadioControl>
            {children}
            <label htmlFor={children?.props.id}>
                {icon}
                <StyledFormRadioControlHeading as="h3">
                    {labelText}
                </StyledFormRadioControlHeading>
                <StyledFormRadioControlBillingQuantity>
                    {billingQuantity}
                </StyledFormRadioControlBillingQuantity>
                {!isMonthly && (
                    <StyledFormRadioControlExtraText>
                        2 months free
                    </StyledFormRadioControlExtraText>
                )}
            </label>
        </StyledFormRadioControl>
    );
};

export default FormRadioControl;
