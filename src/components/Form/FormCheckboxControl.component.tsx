import { JSX } from 'react';
import {
    StyledCheckbox,
    StyledFormCheckboxControl,
    StyledFormCheckboxControlHeading,
    StyledFormCheckboxControlExtraText,
    StyledFormCheckboxControlBillingQuantity,
} from '../styled/Form/FormCheckboxControl.styled';

interface FormCheckboxControlProps {
    children?: JSX.Element;
    labelText: string;
    extraText: string;
    billingQuantity: string;
}

const FormCheckboxControl = ({
    children,
    labelText,
    extraText,
    billingQuantity,
}: FormCheckboxControlProps) => {
    return (
        <StyledFormCheckboxControl>
            {children}
            <label htmlFor={children?.props.id}>
                <StyledCheckbox></StyledCheckbox>
                <StyledFormCheckboxControlHeading as="h3">
                    {labelText}
                </StyledFormCheckboxControlHeading>
                <StyledFormCheckboxControlExtraText>
                    {extraText}
                </StyledFormCheckboxControlExtraText>
                <StyledFormCheckboxControlBillingQuantity>
                    {billingQuantity}
                </StyledFormCheckboxControlBillingQuantity>
            </label>
        </StyledFormCheckboxControl>
    );
};

export default FormCheckboxControl;
