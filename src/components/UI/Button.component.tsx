import { ReactNode } from 'react';
import StyledButton from '../styled/UI/Button.styled';

interface ButtonProps {
    children?: ReactNode;
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
    onClick?: () => void;
}

const Button = ({ type = 'button', onClick, children }: ButtonProps) => {
    return (
        <StyledButton type={type} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
