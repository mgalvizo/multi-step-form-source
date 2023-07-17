import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './components/styled/GlobalStyle.styled';
import AppLayout from './components/pages/AppLayout.component';
import YourInfo from './components/Steps/YourInfo.component';
import SelectPlan from './components/Steps/SelectPlan.component';
import PageNotFound from './components/pages/PageNotFound.component';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <HashRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route
                            index
                            element={<Navigate replace to="personal-info" />}
                        />
                        <Route path="personal-info" element={<YourInfo />} />
                        <Route path="select-plan" element={<SelectPlan />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
