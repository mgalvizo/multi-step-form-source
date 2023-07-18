import { JSX } from 'react';
import StyledFormCheckboxControl from '../styled/FormCheckboxControl.styled';
import StyledHeading from '../styled/Heading.styled';

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
                <StyledHeading as="h3">{labelText}</StyledHeading>
                <p>{extraText}</p>
                <p>{billingQuantity}</p>
            </label>
        </StyledFormCheckboxControl>
    );
};

export default FormCheckboxControl;
