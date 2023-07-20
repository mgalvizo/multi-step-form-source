import styled from 'styled-components';

const StyledSelectPlan = styled.section`
    .billing-period-field {
        margin-top: var(--web-margin-l);
    }

    // 768px
    @media only screen and (min-width: 48em) {
        .plan-field {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
        }
    }
`;

export default StyledSelectPlan;
