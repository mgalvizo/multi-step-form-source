import styled, { css } from 'styled-components';
import { ButtonProps } from '../../UI/Button.component';

const StyledButton = styled.button<ButtonProps>`
    border-radius: var(--button-border-rad);
    font-family: inherit;
    font-weight: 500;
    font-size: var(--button-fsz-s);
    cursor: pointer;
    transition-property: background;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;

    ${({ kind }) =>
        kind === 'back' &&
        css`
            padding: var(--web-padding-s);
            background-color: transparent;
            color: var(--gray);
        `}

    ${({ kind }) =>
        kind === 'next' &&
        css`
            padding: calc(var(--web-padding-xs) + var(--web-padding-s))
                var(--web-padding-m);
            background-color: var(--denim);
            color: var(--white);

            &:hover {
                background-color: var(--light-denim);
            }
        `}

        ${({ kind }) =>
        kind === 'confirm' &&
        css`
            padding: calc(var(--web-padding-xs) + var(--web-padding-s))
                var(--web-padding-m);
            background-color: var(--purple);
            color: var(--white);

            &:hover {
                background-color: var(--light-purple);
            }
        `}

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: var(--button-fsz-l);
    }
`;

export default StyledButton;
