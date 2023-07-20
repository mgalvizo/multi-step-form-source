import { JSX } from 'react';
import StyledFormSwitchControl from '../styled/Form/FormSwitchControl.styled';

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
            <label htmlFor={children?.props.id}>
                <div className="monthly">Monthly</div>
                <div className="switch">{labelText}</div>
                <div className="yearly">Yearly</div>
            </label>
        </StyledFormSwitchControl>
    );
};

export default FormSwitchControl;
