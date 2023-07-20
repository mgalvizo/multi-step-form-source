import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import StyledSidebarItem from '../styled/Sidebar/SidebarItem.styled';
import StyledHeading from '../styled/UI/Heading.styled';

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
            <span className="number">{index + 1}</span>
            <span className="step">Step {index + 1}</span>
            <StyledHeading as="h2" className="title">
                {title}
            </StyledHeading>
        </StyledSidebarItem>
    );
};

export default SidebarItem;
