import styled from 'styled-components';
import {
    StyledComponent,
    StyledComponentContent,
} from '../Pages/AppLayout.styled';
import StyledHeading from '../UI/Heading.styled';

const StyledThankYou = styled(StyledComponent)`
    text-align: center;

    // 768px
    @media only screen and (min-width: 48em) {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
    }
`;

const StyledThankYouContent = styled(StyledComponentContent)``;

const StyledThankYouHeading = styled(StyledHeading)`
    margin-top: var(--web-margin-l);

    // 768px
    @media only screen and (min-width: 48em) {
        margin-top: var(--web-margin-xl);
    }
`;

export { StyledThankYou, StyledThankYouContent, StyledThankYouHeading };
