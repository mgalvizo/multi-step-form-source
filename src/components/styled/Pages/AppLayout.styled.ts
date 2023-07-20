import styled from 'styled-components';

const StyledAppLayout = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    main {
        padding-right: var(--web-padding-m);
        padding-left: var(--web-padding-m);
    }

    .component {
        padding-bottom: calc(69px + var(--web-padding-l));

        .component__content {
            padding: var(--web-padding-xl) var(--web-padding-l);
            background-color: var(--white);
            border-radius: var(--form-border-radius);
            box-shadow: var(--form-box-shadow);
        }
    }

    .step-description {
        color: var(--gray);
        margin-top: var(--web-margin-xs);
        margin-bottom: var(--web-margin-l);
    }

    .button__container {
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
    }

    fieldset {
        display: flex;
        flex-flow: column wrap;
        gap: var(--web-margin-m);
    }

    // 768px
    @media only screen and (min-width: 48em) {
        padding-right: var(--web-padding-m);
        padding-left: var(--web-padding-m);

        .app-layout__content {
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

        main {
            position: relative;
            padding-top: var(--web-padding-xl2);
            padding-right: 0;
            padding-left: var(--web-padding-l);
        }

        section {
            position: relative;
            height: 100%;
        }

        .component {
            padding: 0;

            .component__content {
                background-color: transparent;
                padding: 0;
                border-radius: 0;
                box-shadow: none;
            }
        }

        .step-description {
            margin-top: var(--web-margin-s);
            margin-bottom: var(--web-margin-xl);
        }

        .button__container {
            padding: 0;
            bottom: var(--web-margin-m);
            background-color: transparent;
            box-shadow: none;
        }
    }

    // 900px
    @media only screen and (min-width: 56.25em) {
        .app-layout__content {
            padding-right: calc(var(--web-padding-m) + var(--web-padding-xl2));
        }

        main {
            padding-left: var(--web-padding-xl2);
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        .app-layout__content {
            padding-right: calc(
                var(--web-padding-m) + var(--web-padding-xl2) * 2
            );
        }

        main {
            padding-left: calc(var(--web-padding-xl2) * 2);
        }
    }
`;

export default StyledAppLayout;
