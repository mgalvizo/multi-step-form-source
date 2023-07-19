import { JSX } from 'react';
import StyledFormInputControl from '../styled/Form/FormInputControl.styled';

interface FormInputControlProps {
    children?: JSX.Element;
    labelText?: string;
    errorMessage?: string;
}

const FormInputControl = ({
    children,
    labelText,
    errorMessage,
}: FormInputControlProps) => {
    return (
        <StyledFormInputControl>
            <label htmlFor={children?.props.id}>{labelText}</label>
            {children}
            {errorMessage && <span>{errorMessage}</span>}
        </StyledFormInputControl>
    );
};

export default FormInputControl;
