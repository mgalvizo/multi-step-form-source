import styled from 'styled-components';

const StyledSidebarList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    gap: var(--web-margin-m);

    // 768px
    @media only screen and (min-width: 48em) {
        align-items: start;
        flex-direction: column;
        gap: var(--web-margin-xl);
    }
`;

export default StyledSidebarList;
