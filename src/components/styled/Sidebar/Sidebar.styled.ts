import styled from 'styled-components';
import SidebarBgMobile from '../../../assets/bg-sidebar-mobile.svg';
import SidebarBgDesktop from '../../../assets/bg-sidebar-desktop.svg';

const StyledSidebar = styled.aside`
    position: relative;
    padding-top: var(--web-padding-xl2);
    padding-bottom: var(--web-padding-xl2);

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 172px;
        background-color: transparent;
        background-image: url(${SidebarBgMobile});
        background-repeat: no-repeat;
        background-size: 100% auto;
        content: '';
        z-index: -1;
    }

    // 768px
    @media only screen and (min-width: 48em) {
        max-width: 274px;
        min-height: 568px;
        padding-right: var(--web-padding-xl);
        padding-left: var(--web-padding-xl);
        z-index: 0;

        &::before {
            border-radius: var(--form-border-radius);
            height: 568px;
            background-image: url(${SidebarBgDesktop});
            background-size: auto auto;
        }
    }
`;

export default StyledSidebar;
