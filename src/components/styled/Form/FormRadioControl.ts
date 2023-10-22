import styled from 'styled-components';
import StyledHeading from '../UI/Heading.styled';

const StyledFormRadioControl = styled.div`
    label {
        display: grid;
        grid-template-areas:
            'icon title '
            'icon billingQuantity'
            'icon extraText';
        justify-content: start;
        align-items: start;
        column-gap: var(--web-margin-m);
        padding: var(--web-padding-l) var(--web-padding-m);
        border: 1px solid var(--input-border-color);
        border-radius: var(--input-border-rad);
        background-color: var(--white);
        cursor: pointer;
        transition-property: background, border;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;

        &:hover {
            border-color: var(--purple);
        }
    }

    input[type='radio']:checked + label {
        border-color: var(--purple);
        background-color: var(--very-light-gray);
    }

    svg {
        grid-area: icon;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        label {
            grid-template-areas: none;
            display: flex;
            flex-flow: column wrap;
        }

        svg {
            margin-bottom: var(--web-margin-xl);
        }
    }
`;

const StyledFormRadioControlHeading = styled(StyledHeading)`
    grid-area: title;
`;

const StyledFormRadioControlBillingQuantity = styled.p`
    color: var(--gray);
    font-size: 1.4rem;
    grid-area: billingQuantity;
`;

const StyledFormRadioControlExtraText = styled.p`
    font-size: 1.2rem;
    grid-area: extraText;
`;

export {
    StyledFormRadioControl,
    StyledFormRadioControlHeading,
    StyledFormRadioControlBillingQuantity,
    StyledFormRadioControlExtraText,
};
