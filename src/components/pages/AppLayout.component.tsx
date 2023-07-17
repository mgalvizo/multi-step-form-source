import { Outlet } from 'react-router-dom';
import StyledAppLayout from '../styled/AppLayout.styled';
import Attribution from '../Attribution.component';

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <span>Sidebar</span>
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
