import { ReactNode } from 'react';
import StyledSidebarList from '../styled/Sidebar/SidebarList.styled';

interface SidebarListProps {
    children?: ReactNode;
}

const SidebarList = ({ children }: SidebarListProps) => {
    return <StyledSidebarList>{children}</StyledSidebarList>;
};

export default SidebarList;
