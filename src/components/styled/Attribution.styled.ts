import styled from 'styled-components';

const StyledAttribution = styled.footer`
    width: 100%;
    padding: 0 var(--web-padding-l);
    margin-top: auto;

    .attribution {
        border-top-left-radius: var(--attribution-rad);
        border-top-right-radius: var(--attribution-rad);
        padding: var(--web-padding-s);
        text-align: center;
        background-color: var(--white);
        font-size: 1.4rem;
        box-shadow: var(--attribution-box-shadow);
    }
`;

export default StyledAttribution;
