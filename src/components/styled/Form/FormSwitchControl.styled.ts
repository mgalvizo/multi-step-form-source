import styled from 'styled-components';

const StyledSwitch = styled.div`
    position: relative;
    width: var(--switch-wt);
    height: var(--switch-ht);
    background-color: var(--denim);
    border-radius: 999px;
    text-indent: -9999px;
    cursor: pointer;

    &:after {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: var(--toggler-ball-sz);
        height: var(--toggler-ball-sz);
        border-radius: 50%;
        background-color: var(--white);
        transition-property: transform;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
        content: '';
    }
`;

const StyledFormSwitchControlYearly = styled.div`
    transition-property: color;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
`;

const StyledFormSwitchControlMonthly = styled.div`
    transition-property: color;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
`;

const StyledFormSwitchControl = styled.div`
    label {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row wrap;
        gap: var(--web-margin-l);
        padding: var(--web-padding-m);
        border-radius: var(--input-border-rad);
        background-color: var(--very-light-gray);
        font-size: 1.4rem;

        div {
            color: var(--gray);
            font-weight: 500;
        }
    }

    input[type='checkbox']:checked + label {
        ${StyledFormSwitchControlMonthly} {
            color: var(--denim);
        }

        ${StyledSwitch} {
            &:after {
                transform: translateX(4px) translateY(4px);
            }
        }
    }

    input[type='checkbox']:not(:checked) + label {
        ${StyledFormSwitchControlYearly} {
            color: var(--denim);
        }

        ${StyledSwitch} {
            &:after {
                transform: translateX(22px) translateY(4px);
            }
        }
    }
`;

export {
    StyledSwitch,
    StyledFormSwitchControl,
    StyledFormSwitchControlYearly,
    StyledFormSwitchControlMonthly,
};
