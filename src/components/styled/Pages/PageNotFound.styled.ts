import styled from 'styled-components';

const StyledPageNotFound = styled.main`
    padding: var(--web-padding-m);

    h1 {
        margin-bottom: var(--web-margin-m);
    }

    .app-layout__content {
        padding: var(--web-padding-xl) var(--web-padding-l);
        background-color: var(--white);
        border-radius: var(--form-border-radius);
        box-shadow: var(--form-box-shadow);
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

        .app__layout {
            flex-basis: var(--max-content-width);
            text-align: center;
        }
    }
`;

export default StyledPageNotFound;
