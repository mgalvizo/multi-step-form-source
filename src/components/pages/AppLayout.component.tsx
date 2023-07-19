import { Outlet } from 'react-router-dom';
import StyledAppLayout from '../styled/Pages/AppLayout.styled';
import Sidebar from '../Sidebar/Sidebar.component';
import Attribution from '../Attribution.component';

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <Sidebar />
            <main>
                <Outlet />
            </main>
            <footer>
                <Attribution />
            </footer>
        </StyledAppLayout>
    );
};

export default AppLayout;
