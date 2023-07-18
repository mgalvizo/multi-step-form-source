import { JSX } from 'react';
import StyledFormRadioControl from '../styled/FormRadioControl';

interface FormRadioControlProps {
    children?: JSX.Element;
    labelText: string;
    billingQuantity: string;
    period: string;
    icon: JSX.Element;
}

const FormRadioControl = ({
    children,
    labelText,
    billingQuantity,
    period,
    icon,
}: FormRadioControlProps) => {
    return (
        <StyledFormRadioControl>
            {children}
            <label htmlFor={children?.props.id}>
                {icon}
                <h3>{labelText}</h3>
                <p>{billingQuantity}</p>
                {period === 'yearly' && <p>2 months free</p>}
            </label>
        </StyledFormRadioControl>
    );
};

export default FormRadioControl;
