import { Outlet } from 'react-router-dom';
import StyledAppLayout from '../styled/Pages/AppLayout.styled';
import Sidebar from '../Sidebar/Sidebar.component';

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <Sidebar />
            <main>
                <Outlet />
            </main>
        </StyledAppLayout>
    );
};

export default AppLayout;
