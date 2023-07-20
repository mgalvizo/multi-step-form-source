import { JSX } from 'react';
import StyledFormCheckboxControl from '../styled/Form/FormCheckboxControl.styled';
import StyledHeading from '../styled/UI/Heading.styled';

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
                <div className="checkbox"></div>
                <StyledHeading as="h3">{labelText}</StyledHeading>
                <p className="extra-text">{extraText}</p>
                <p className="billing-quantity">{billingQuantity}</p>
            </label>
        </StyledFormCheckboxControl>
    );
};

export default FormCheckboxControl;
