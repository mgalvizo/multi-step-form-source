import { ReactNode, MouseEvent } from 'react';
import StyledButton from '../styled/UI/Button.styled';

export interface ButtonProps {
    id: string;
    children?: ReactNode;
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
    kind?: 'back' | 'next' | 'confirm' | undefined;
    onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
    id,
    children,
    type = 'button',
    disabled,
    kind,
    onClick,
}: ButtonProps) => {
    return (
        <StyledButton
            id={id}
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
