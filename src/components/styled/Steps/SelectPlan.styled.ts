import styled from 'styled-components';
import {
    StyledComponent,
    StyledComponentContent,
    StyledFieldset,
} from '../Pages/AppLayout.styled';

const StyledSelectPlan = styled(StyledComponent)``;

const StyledSelectPlanContent = styled(StyledComponentContent)``;

const StyledBillingPeriodField = styled(StyledFieldset)`
    margin-top: var(--web-margin-l);
`;

const StyledPlanField = styled(StyledFieldset)`
    // 768px
    @media only screen and (min-width: 48em) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
    }
`;

export {
    StyledSelectPlan,
    StyledSelectPlanContent,
    StyledBillingPeriodField,
    StyledPlanField,
};
