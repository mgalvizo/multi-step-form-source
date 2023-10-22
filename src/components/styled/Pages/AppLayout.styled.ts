import styled from 'styled-components';

const StyledAppLayout = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    // 768px
    @media only screen and (min-width: 48em) {
        padding-right: var(--web-padding-m);
        padding-left: var(--web-padding-m);
    }
`;

const StyledAppLayoutContent = styled.div`
    flex-basis: var(--max-content-width);

    // 768px
    @media only screen and (min-width: 48em) {
        display: grid;
        padding-top: var(--web-padding-m);
        padding-right: calc(var(--web-padding-m) + var(--web-padding-l));
        padding-bottom: var(--web-padding-m);
        padding-left: var(--web-padding-m);
        grid-template-rows: 1fr;
        grid-template-columns: 274px 1fr;
        column-gap: var(--web-margin-m);
        background-color: var(--white);
        border-radius: var(--form-border-radius);
        box-shadow: var(--form-box-shadow);
    }

    // 900px
    @media only screen and (min-width: 56.25em) {
        padding-right: calc(var(--web-padding-m) + var(--web-padding-xl2));
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        padding-right: calc(var(--web-padding-m) + var(--web-padding-xl2) * 2);
    }
`;

const StyledMain = styled.main`
    padding-right: var(--web-padding-m);
    padding-left: var(--web-padding-m);

    // 768px
    @media only screen and (min-width: 48em) {
        position: relative;
        padding-top: var(--web-padding-xl2);
        padding-right: 0;
        padding-left: var(--web-padding-l);
    }

    // 900px
    @media only screen and (min-width: 56.25em) {
        padding-left: var(--web-padding-xl2);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        padding-left: calc(var(--web-padding-xl2) * 2);
    }
`;

const StyledComponent = styled.div`
    padding-bottom: calc(69px + var(--web-padding-l));

    // 768px
    @media only screen and (min-width: 48em) {
        padding: 0;
    }
`;

const StyledComponentContent = styled.div`
    padding: var(--web-padding-xl) var(--web-padding-l);
    background-color: var(--white);
    border-radius: var(--form-border-radius);
    box-shadow: var(--form-box-shadow);

    // 768px
    @media only screen and (min-width: 48em) {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        box-shadow: none;
    }
`;

const StyledStepDescription = styled.p`
    color: var(--gray);
    margin-top: var(--web-margin-xs);
    margin-bottom: var(--web-margin-l);

    // 768px
    @media only screen and (min-width: 48em) {
        margin-top: var(--web-margin-s);
        margin-bottom: var(--web-margin-xl);
    }
`;

const StyledButtonContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: var(--web-padding-m);
    background-color: var(--white);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--form-box-shadow);

    // 768px
    @media only screen and (min-width: 48em) {
        padding: 0;
        bottom: var(--web-margin-m);
        background-color: transparent;
        box-shadow: none;
    }
`;

const StyledFieldset = styled.fieldset`
    display: flex;
    flex-flow: column wrap;
    gap: var(--web-margin-m);
`;

export {
    StyledAppLayout,
    StyledAppLayoutContent,
    StyledMain,
    StyledComponent,
    StyledComponentContent,
    StyledStepDescription,
    StyledButtonContainer,
    StyledFieldset,
};
