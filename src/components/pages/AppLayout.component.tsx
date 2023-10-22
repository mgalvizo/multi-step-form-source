import { Outlet } from 'react-router-dom';
import {
    StyledAppLayout,
    StyledAppLayoutContent,
    StyledMain,
} from '../styled/Pages/AppLayout.styled';
import Sidebar from '../Sidebar/Sidebar.component';

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <StyledAppLayoutContent>
                <Sidebar />
                <StyledMain>
                    <Outlet />
                </StyledMain>
            </StyledAppLayoutContent>
        </StyledAppLayout>
    );
};

export default AppLayout;
