import { JSX } from 'react';
import StyledFormControl from '../styled/FormControl.styled';

interface FormControlProps {
    children?: JSX.Element;
    labelText?: string;
    errorMessage?: string;
}

const FormControl = ({
    children,
    labelText,
    errorMessage,
}: FormControlProps) => {
    return (
        <StyledFormControl>
            <label htmlFor={children?.props.id}>{labelText}</label>
            {children}
            {errorMessage && <span>{errorMessage}</span>}
        </StyledFormControl>
    );
};

export default FormControl;
