import styled from 'styled-components';

const StyledThankYou = styled.section`
    text-align: center;

    h1 {
        margin-top: var(--web-margin-l);
    }

    // 768px
    @media only screen and (min-width: 48em) {
        &.component {
            display: flex;
            flex-flow: column wrap;
            justify-content: center;
            align-items: center;
        }

        h1 {
            margin-top: var(--web-margin-xl);
        }
    }
`;

export default StyledThankYou;
