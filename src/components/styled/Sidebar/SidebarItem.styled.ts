import styled from 'styled-components';
import StyledHeading from '../UI/Heading.styled';

const StyledSidebarItemNumber = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--ellipse-sz);
    height: var(--ellipse-sz);
    border: 1px solid var(--ellipse-color);
    border-radius: 50%;
    color: var(--ellipse-color);
    font-size: var(--ellipse-number-sz);

    // 768px
    @media only screen and (min-width: 48em) {
        grid-area: number;
    }
`;

const StyledSidebarItem = styled.li`
    text-transform: uppercase;

    &.active {
        ${StyledSidebarItemNumber} {
            color: var(--denim);
            background-color: var(--sky-blue);
            border-color: var(--sky-blue);
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
        display: grid;
        grid-template-areas:
            'number step'
            'number title';
        column-gap: var(--web-margin-m);
        align-items: center;
    }
`;

const StyledSidebarItemStep = styled.span`
    display: none;
    color: var(--light-blue);
    font-size: var(--step-text-sz);

    // 768px
    @media only screen and (min-width: 48em) {
        display: block;
        grid-area: step;
    }
`;

const StyledSidebarItemTitle = styled(StyledHeading)`
    display: none;

    // 768px
    @media only screen and (min-width: 48em) {
        display: block;
        grid-area: title;
    }
`;

export {
    StyledSidebarItemNumber,
    StyledSidebarItem,
    StyledSidebarItemStep,
    StyledSidebarItemTitle,
};
