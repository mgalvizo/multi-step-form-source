import { JSX } from 'react';
import {
    StyledSwitch,
    StyledFormSwitchControl,
    StyledFormSwitchControlYearly,
    StyledFormSwitchControlMonthly,
} from '../styled/Form/FormSwitchControl.styled';

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
                <StyledFormSwitchControlMonthly>
                    Monthly
                </StyledFormSwitchControlMonthly>
                <StyledSwitch>{labelText}</StyledSwitch>
                <StyledFormSwitchControlYearly>
                    Yearly
                </StyledFormSwitchControlYearly>
            </label>
        </StyledFormSwitchControl>
    );
};

export default FormSwitchControl;
