import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import {
    StyledSidebarItemNumber,
    StyledSidebarItem,
    StyledSidebarItemStep,
    StyledSidebarItemTitle,
} from '../styled/Sidebar/SidebarItem.styled';

type Step = {
    id: string;
    title: string;
    path: string;
};

interface SidebarItemProps {
    children?: ReactNode;
    step: Step;
    index: number;
}

const SidebarItem = ({ step, index }: SidebarItemProps) => {
    const location = useLocation();
    const { title, path } = step;

    return (
        <StyledSidebarItem
            className={`${path === location.pathname ? 'active' : ''}`}
        >
            <StyledSidebarItemNumber>{index + 1}</StyledSidebarItemNumber>
            <StyledSidebarItemStep>Step {index + 1}</StyledSidebarItemStep>
            <StyledSidebarItemTitle as="h2" className="title">
                {title}
            </StyledSidebarItemTitle>
        </StyledSidebarItem>
    );
};

export default SidebarItem;
