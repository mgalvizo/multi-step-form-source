import { ReactNode } from 'react';
import StyledSidebarItem from '../styled/Sidebar/SidebarItem.styled';
import StyledHeading from '../styled/UI/Heading.styled';

type Step = {
    id: string;
    title: string;
};

interface SidebarItemProps {
    children?: ReactNode;
    step: Step;
    index: number;
}

const SidebarItem = ({ step, index }: SidebarItemProps) => {
    const { title } = step;

    return (
        <StyledSidebarItem>
            <span className="number">{index + 1}</span>
            <span>Step {index + 1}</span>
            <StyledHeading as="h2">{title}</StyledHeading>
        </StyledSidebarItem>
    );
};

export default SidebarItem;
