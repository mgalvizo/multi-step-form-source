import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './components/styled/GlobalStyle.styled';
import AppLayout from './components/pages/AppLayout.component';
import PersonalInfo from './components/Steps/PersonalInfo.component';
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
                        <Route
                            path="personal-info"
                            element={<PersonalInfo />}
                        />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
