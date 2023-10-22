import styled from 'styled-components';
import {
    StyledComponent,
    StyledComponentContent,
} from '../Pages/AppLayout.styled';
import StyledHeading from '../UI/Heading.styled';

const StyledFinishingUp = styled(StyledComponent)``;

const StyledFinishingUpContent = styled(StyledComponentContent)``;

const StyledFinishingUpSummary = styled.div`
    margin-bottom: var(--web-margin-l);
    padding: var(--web-padding-m);
    background-color: var(--very-light-gray);
    font-size: 1.4rem;
    border-radius: var(--input-border-rad);

    // 768px
    @media only screen and (min-width: 48em) {
        padding-right: var(--web-padding-l);
        padding-bottom: var(--web-padding-l);
        padding-left: var(--web-padding-l);
    }
`;

const StyledFinishingUpPlanInfo = styled.div`
    display: grid;
    grid-template-areas:
        'plan billingPeriodQuantity'
        'link billingPeriodQuantity';
    grid-template-columns: 1fr auto;
    justify-content: start;
    align-items: center;
`;

const StyledFinishingUpHeading = styled(StyledHeading)`
    font-size: 1.4rem;
    grid-area: plan;

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: 1.6rem;
    }
`;

const StyledFinishingUpLinkContainer = styled.p`
    grid-area: link;
`;

const StyledFinishingUpBillingPeriodQuantity = styled.strong`
    grid-area: billingPeriodQuantity;

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: 1.6rem;
    }
`;

const StyledFinishingUpAddonsInfo = styled.div``;

const StyledFinishingUpAddons = styled.ul`
    list-style-type: none;
    padding-top: calc(var(--web-padding-xs) + var(--web-padding-s));
    margin-top: calc(var(--web-margin-xs) + var(--web-margin-s));
    border-top: 1px solid rgba(150, 153, 170, 0.2);

    li {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        color: var(--gray);

        span {
            color: var(--denim);
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
        margin-top: var(--web-margin-l);
        display: flex;
        flex-flow: column wrap;
        justify-content: start;
        align-items: start;
        gap: var(--web-margin-m);

        li {
            width: 100%;
        }
    }
`;

const StyledFinishingUpTotalInfo = styled.div`
    color: var(--gray);
    font-size: 1.4rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding-right: var(--web-padding-m);
    padding-left: var(--web-padding-m);
`;

const StyledFinishingUpTotalQuantity = styled.strong`
    color: var(--purple);
    font-size: 1.6rem;

    // 768px
    @media only screen and (min-width: 48em) {
        font-size: 2rem;
    }
`;

export {
    StyledFinishingUp,
    StyledFinishingUpContent,
    StyledFinishingUpSummary,
    StyledFinishingUpPlanInfo,
    StyledFinishingUpHeading,
    StyledFinishingUpLinkContainer,
    StyledFinishingUpBillingPeriodQuantity,
    StyledFinishingUpAddonsInfo,
    StyledFinishingUpAddons,
    StyledFinishingUpTotalInfo,
    StyledFinishingUpTotalQuantity,
};
