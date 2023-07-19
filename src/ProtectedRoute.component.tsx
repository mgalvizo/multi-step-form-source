import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, ReactNode } from 'react';
import { getFormState } from './components/Form/formSlice';

interface ProtectedRouteProps {
    children?: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const navigate = useNavigate();

    const { personalInfo, selectPlan, pickAddons, isComplete } =
        useSelector(getFormState);

    const isPersonalInfoEmpty = Object.values(personalInfo).every(
        value => value === ''
    );

    const isPlanEmpty = selectPlan.plan === '';
    const isBillingPeriodUnselected = Object.values(
        selectPlan.billingPeriod
    ).every(value => value === false);

    const isPickAddonsUnselected = Object.values(pickAddons).every(
        value => value === false
    );

    useEffect(() => {
        if (isComplete) {
            navigate('/thank-you');
        } else if (
            isPersonalInfoEmpty &&
            isPlanEmpty &&
            isBillingPeriodUnselected &&
            isPickAddonsUnselected
        ) {
            navigate('/personal-info');
        }
    }, [
        isComplete,
        isPersonalInfoEmpty,
        isPlanEmpty,
        isBillingPeriodUnselected,
        isPickAddonsUnselected,
        navigate,
    ]);

    return children;
};

export default ProtectedRoute;
