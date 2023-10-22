import styled from 'styled-components';
import StyledHeading from '../UI/Heading.styled';

const StyledCheckbox = styled.div`
    position: relative;
    width: var(--checkbox-sz);
    height: var(--checkbox-sz);
    border: 1px solid var(--input-border-color);
    border-radius: var(--checkbox-border-radius);
    grid-area: checkbox;
    transition-property: background, border-color;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;

    &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        width: var(--checkmark-wt);
        height: var(--checkmark-ht);
        border: solid var(--white);
        border-width: 0 2px 2px 0;
        transform: translate(-50%, -50%) rotate(45deg);
        opacity: 0;
        content: '';
        transition-property: opacity;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }
`;

const StyledFormCheckboxControl = styled.div`
    label {
        display: grid;
        grid-template-areas:
            'checkbox title billingQuantity'
            'checkbox extraText billingQuantity';
        grid-template-columns: auto 1fr auto;
        column-gap: var(--web-margin-m);
        justify-content: start;
        align-items: center;
        padding: calc(var(--web-padding-xs) + var(--web-padding-s))
            var(--web-padding-m);
        background-color: var(--white);
        border: 1px solid var(--input-border-color);
        border-radius: var(--input-border-rad);
        transition-property: background, border-color;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
        cursor: pointer;

        &:hover {
            border-color: var(--purple);
        }
    }

    input[type='checkbox']:checked + label {
        background-color: var(--very-light-gray);
        border-color: var(--purple);

        ${StyledCheckbox} {
            border-color: var(--purple);
            background-color: var(--purple);

            &::after {
                opacity: 1;
            }
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
        label {
            padding: var(--web-padding-m) var(--web-padding-l);
        }
    }
`;

const StyledFormCheckboxControlHeading = styled(StyledHeading)`
    font-size: 1.4rem;
    grid-area: title;

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: 1.6rem;
    }
`;

const StyledFormCheckboxControlExtraText = styled.p`
    grid-area: extraText;
    color: var(--gray);
    font-size: 1.2rem;

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: 1.5rem;
    }
`;

const StyledFormCheckboxControlBillingQuantity = styled.p`
    grid-area: billingQuantity;
    color: var(--purple);
    font-size: 1.2rem;

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: 1.4rem;
    }
`;

export {
    StyledCheckbox,
    StyledFormCheckboxControl,
    StyledFormCheckboxControlHeading,
    StyledFormCheckboxControlExtraText,
    StyledFormCheckboxControlBillingQuantity,
};
