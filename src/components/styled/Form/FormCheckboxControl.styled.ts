import styled from 'styled-components';

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

    .checkbox {
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
    }

    h3 {
        font-size: 1.4rem;
        grid-area: title;
    }

    .extra-text {
        grid-area: extraText;
        color: var(--gray);
        font-size: 1.2rem;
    }

    .billing-quantity {
        grid-area: billingQuantity;
        color: var(--purple);
        font-size: 1.2rem;
    }

    input[type='checkbox']:checked + label {
        background-color: var(--very-light-gray);
        border-color: var(--purple);

        .checkbox {
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

        h3 {
            font-size: 1.6rem;
        }

        .extra-text {
            font-size: 1.5rem;
        }

        .billing-quantity {
            font-size: 1.4rem;
        }
    }
`;

export default StyledFormCheckboxControl;
