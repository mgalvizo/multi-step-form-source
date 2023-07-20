import { JSX } from 'react';
import StyledFormRadioControl from '../styled/Form/FormRadioControl';
import StyledHeading from '../styled/UI/Heading.styled';

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
                <StyledHeading as="h3">{labelText}</StyledHeading>
                <p className="billing-quantity">{billingQuantity}</p>
                {!isMonthly && <p className="extra-text">2 months free</p>}
            </label>
        </StyledFormRadioControl>
    );
};

export default FormRadioControl;
