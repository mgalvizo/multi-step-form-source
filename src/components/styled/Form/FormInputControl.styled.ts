import styled from 'styled-components';

const StyledFormInputControl = styled.div`
    position: relative;

    label {
        display: block;
        margin-bottom: var(--web-margin-s);
        font-size: var(--label-fsz-s);
        line-height: var(--label-lht);
    }

    input[type='text'],
    input[type='email'] {
        display: block;
        width: 100%;
        height: var(--input-sz-s);
        padding-left: var(--web-padding-m);
        padding-right: var(--web-padding-m);
        border: 1px solid var(--input-border-color);
        border-radius: var(--input-text-border-rad);
        line-height: var(--input-sz-s);
        color: inherit;
        font-size: var(--input-fsz-s);
        font-family: inherit;
        outline: none;

        &::placeholder {
            color: var(--gray);
        }

        &:active,
        &:focus {
            border-color: var(--purple);
        }
    }

    &.error {
        input[type='text'],
        input[type='email'] {
            border-color: var(--red-errors);
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
        label {
            font-size: var(--label-fsz-l);
        }

        input[type='text'],
        input[type='email'] {
            height: var(--input-sz-l);
            line-height: var(--input-sz-l);
            font-size: var(--input-fsz-l);
        }
    }
`;

const StyledErrorMessage = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    color: var(--red-errors);
    font-weight: bold;
    font-size: var(--label-fsz-s);

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: var(--label-fsz-l);
    }
`;

export { StyledFormInputControl, StyledErrorMessage };
