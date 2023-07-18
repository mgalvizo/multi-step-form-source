import { JSX } from 'react';
import StyledFormRadioControl from '../styled/FormRadioControl';

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
                <h3>{labelText}</h3>
                <p>{billingQuantity}</p>
                {!isMonthly && <p>2 months free</p>}
            </label>
        </StyledFormRadioControl>
    );
};

export default FormRadioControl;
