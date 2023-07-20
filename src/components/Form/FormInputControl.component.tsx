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
        <StyledFormInputControl className={errorMessage ? 'error' : ''}>
            <label htmlFor={children?.props.id}>{labelText}</label>
            {children}
            {errorMessage && (
                <span className="error-message">{errorMessage}</span>
            )}
        </StyledFormInputControl>
    );
};

export default FormInputControl;
