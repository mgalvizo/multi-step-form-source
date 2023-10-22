import styled from 'styled-components';
import {
    StyledAppLayout,
    StyledAppLayoutContent,
    StyledMain,
} from './AppLayout.styled';

const StyledPageNotFound = styled(StyledMain)`
    padding: var(--web-padding-m);

    h1 {
        margin-bottom: var(--web-margin-m);
    }

    // 768px
    @media only screen and (min-width: 48em) {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        padding-top: 0;
        padding-right: var(--web-padding-l);
        padding-bottom: 0;
        padding-left: var(--web-padding-l);
    }
`;

const StyledPageNotFoundLayout = styled(StyledAppLayout)``;

const StyledPageNotFoundContent = styled(StyledAppLayoutContent)`
    padding: var(--web-padding-xl) var(--web-padding-l);
    background-color: var(--white);
    border-radius: var(--form-border-radius);
    box-shadow: var(--form-box-shadow);

    // 768px
    @media only screen and (min-width: 48em) {
        display: block;
        flex-basis: var(--max-content-width);
        text-align: center;
    }
`;

export {
    StyledPageNotFound,
    StyledPageNotFoundLayout,
    StyledPageNotFoundContent,
};
