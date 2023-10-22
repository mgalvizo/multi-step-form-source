import { JSX } from 'react';
import {
    StyledFormInputControl,
    StyledErrorMessage,
} from '../styled/Form/FormInputControl.styled';

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
                <StyledErrorMessage>{errorMessage}</StyledErrorMessage>
            )}
        </StyledFormInputControl>
    );
};

export default FormInputControl;
