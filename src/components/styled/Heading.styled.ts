import styled, { css } from 'styled-components';

const StyledHeading = styled.h1`
    ${({ as }) => as === 'h1' && css``}
`;

export default StyledHeading;
