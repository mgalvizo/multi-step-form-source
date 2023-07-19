import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './components/styled/GlobalStyle.styled';
import AppLayout from './components/Pages/AppLayout.component';
import PersonalInfo from './components/Steps/PersonalInfo.component';
import SelectPlan from './components/Steps/SelectPlan.component';
import PickAddons from './components/Steps/PickAddons.component';
import FinishingUp from './components/Steps/FinishingUp.component';
import ThankYou from './components/Steps/ThankYou.component';
import PageNotFound from './components/Pages/PageNotFound.component';
import ProtectedRoute from './ProtectedRoute.component';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <HashRouter>
                <Routes>
                    <Route
                        element={
                            <ProtectedRoute>
                                <AppLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route
                            index
                            element={<Navigate replace to="personal-info" />}
                        />
                        <Route
                            path="personal-info"
                            element={<PersonalInfo />}
                        />
                        <Route path="select-plan" element={<SelectPlan />} />
                        <Route path="pick-addons" element={<PickAddons />} />
                        <Route path="finishing-up" element={<FinishingUp />} />
                        <Route path="thank-you" element={<ThankYou />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </HashRouter>
        </>
    );
};

export default App;
