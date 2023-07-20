import styled from 'styled-components';

const StyledSidebarItem = styled.li`
    text-transform: uppercase;

    .number {
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--ellipse-sz);
        height: var(--ellipse-sz);
        border: 1px solid var(--ellipse-color);
        border-radius: 50%;
        color: var(--ellipse-color);
        font-size: var(--ellipse-number-sz);
    }

    &.active {
        .number {
            color: var(--denim);
            background-color: var(--sky-blue);
            border-color: var(--sky-blue);
        }
    }

    .step {
        color: var(--light-blue);
        font-size: var(--step-text-sz);
    }

    .step,
    .title {
        display: none;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        display: grid;
        grid-template-areas:
            'number step'
            'number title';
        column-gap: var(--web-margin-m);
        align-items: center;

        .number {
            grid-area: number;
        }

        .step {
            grid-area: step;
        }

        .title {
            grid-area: title;
        }

        .step,
        .title {
            display: block;
        }
    }
`;

export default StyledSidebarItem;
