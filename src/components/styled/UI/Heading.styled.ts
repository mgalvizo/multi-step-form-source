import styled, { css } from 'styled-components';

const StyledHeading = styled.h1`
    ${({ as }) =>
        as === 'h1' &&
        css`
            font-size: var(--h1-fsz-s);
        `}

    ${({ as }) =>
        as === 'h2' &&
        css`
            color: var(--white);
            font-size: var(--step-title-sz);
            letter-spacing: var(--step-title-letter-spacing);
            text-transform: uppercase;
        `}

    ${({ as }) =>
        as === 'h3' &&
        css`
            color: var(--denim);
            font-size: var(--h3-fsz);
            font-weight: 500;
        `}

    // 768px
    @media only screen and (min-width: 48em) {
        ${({ as }) =>
            as === 'h1' &&
            css`
                font-size: var(--h1-fsz-l);
            `}
    }
`;

export default StyledHeading;
