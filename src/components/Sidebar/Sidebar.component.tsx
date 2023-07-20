import { v4 as uuidv4 } from 'uuid';
import StyledSidebar from '../styled/Sidebar/Sidebar.styled';
import SidebarList from './SidebarList.component';
import SidebarItem from './SidebarItem.component';

const STEPS = [
    { id: uuidv4(), title: 'Your Info', path: '/personal-info' },
    { id: uuidv4(), title: 'Select Plan', path: '/select-plan' },
    { id: uuidv4(), title: 'Add-ons', path: '/pick-addons' },
    { id: uuidv4(), title: 'Summary', path: '/finishing-up' },
];

const Sidebar = () => {
    const renderedSteps = STEPS.map((step, index) => {
        const { id } = step;

        return <SidebarItem key={id} step={step} index={index} />;
    });

    return (
        <StyledSidebar>
            <SidebarList>{renderedSteps}</SidebarList>
        </StyledSidebar>
    );
};

export default Sidebar;
