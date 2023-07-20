import styled from 'styled-components';

const StyledFinishingUp = styled.section`
    .summary {
        font-size: 1.4rem;
        padding: var(--web-padding-m);
        background-color: var(--very-light-gray);
        border-radius: var(--input-border-rad);
    }

    .plan__info {
        display: grid;
        grid-template-areas:
            'plan billingPeriodQuantity'
            'link billingPeriodQuantity';
        grid-template-columns: 1fr auto;
        justify-content: start;
        align-items: center;
    }

    h3 {
        font-size: 1.4rem;
        grid-area: plan;
    }

    .link__container {
        grid-area: link;
    }

    .billing-period-quantity {
        grid-area: billingPeriodQuantity;
    }

    .addons {
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
    }

    .total__info {
        color: var(--gray);
        font-size: 1.4rem;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
        padding-right: var(--web-padding-m);
        padding-left: var(--web-padding-m);
    }

    .total-quantity {
        color: var(--purple);
        font-size: 1.6rem;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        h3 {
            font-size: 1.6rem;
        }

        .billing-period-quantity {
            font-size: 1.6rem;
        }

        .total-quantity {
            font-size: 2rem;
        }
    }
`;

export default StyledFinishingUp;
