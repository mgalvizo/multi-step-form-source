import { ReactNode } from 'react';
import StyledButton from '../styled/UI/Button.styled';

export interface ButtonProps {
    children?: ReactNode;
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
    kind?: 'back' | 'next' | 'confirm' | undefined;
    onClick?: () => void;
}

const Button = ({
    children,
    type = 'button',
    disabled,
    kind,
    onClick,
}: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
            type={type}
            kind={kind}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    );
};

export default Button;
