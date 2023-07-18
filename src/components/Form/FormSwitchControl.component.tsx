import { JSX } from 'react';
import StyledFormSwitchControl from '../styled/FormSwitchControl.styled';

interface StyledFormSwitchControlProps {
    children?: JSX.Element;
    labelText: string;
}

const FormSwitchControl = ({
    children,
    labelText,
}: StyledFormSwitchControlProps) => {
    return (
        <StyledFormSwitchControl>
            {children}
            <label htmlFor={children?.props.id}>{labelText}</label>
        </StyledFormSwitchControl>
    );
};

export default FormSwitchControl;
