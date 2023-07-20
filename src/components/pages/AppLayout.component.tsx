import { Outlet } from 'react-router-dom';
import StyledAppLayout from '../styled/Pages/AppLayout.styled';
import Sidebar from '../Sidebar/Sidebar.component';

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <div className="app-layout__content">
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
        </StyledAppLayout>
    );
};

export default AppLayout;
