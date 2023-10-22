import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    StyledFinishingUp,
    StyledFinishingUpContent,
    StyledFinishingUpSummary,
    StyledFinishingUpPlanInfo,
    StyledFinishingUpHeading,
    StyledFinishingUpLinkContainer,
    StyledFinishingUpBillingPeriodQuantity,
    StyledFinishingUpAddonsInfo,
    StyledFinishingUpAddons,
    StyledFinishingUpTotalInfo,
    StyledFinishingUpTotalQuantity,
} from '../styled/Steps/FinishingUp.styled';
import {
    StyledStepDescription,
    StyledButtonContainer,
} from '../styled/Pages/AppLayout.styled';
import StyledHeading from '../styled/UI/Heading.styled';
import Button from '../UI/Button.component';
import { getFormState, completeForm } from '../Form/formSlice';
import { formatQuantity } from '../../utils/helpers';

const FinishingUp = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { selectPlan, pickAddons } = useSelector(getFormState);

    const plan = `${selectPlan.plan
        .charAt(0)
        .toUpperCase()}${selectPlan.plan.slice(1)}`;

    const isMonthly = selectPlan.billingPeriod.monthly;

    const hasAddons = Object.values(pickAddons).some(value => value === true);

    const billingPeriod = isMonthly ? 'Monthly' : 'Yearly';

    let billingPeriodQuantity = 0;

    switch (selectPlan.plan) {
        case 'arcade':
            billingPeriodQuantity = isMonthly ? 9 : 90;
            break;
        case 'advanced':
            billingPeriodQuantity = isMonthly ? 12 : 120;
            break;
        case 'pro':
            billingPeriodQuantity = isMonthly ? 15 : 150;
            break;
    }

    const onlineServiceQuantity = isMonthly ? 1 : 10;

    const largerStorageQuantity = isMonthly ? 2 : 20;

    const customizableProfileQuantity = isMonthly ? 2 : 20;

    const QUANTITIES = [
        billingPeriodQuantity,
        pickAddons.onlineService ? onlineServiceQuantity : 0,
        pickAddons.largerStorage ? largerStorageQuantity : 0,
        pickAddons.customizableProfile ? customizableProfileQuantity : 0,
    ];

    const onlineServiceContent = (
        <li>
            Online Service{' '}
            <span>+{formatQuantity(onlineServiceQuantity, isMonthly)}</span>
        </li>
    );

    const largerStorageContent = (
        <li>
            Larger storage{' '}
            <span>+{formatQuantity(largerStorageQuantity, isMonthly)}</span>
        </li>
    );

    const customizableProfileContent = (
        <li>
            Customizable profile{' '}
            <span>
                +{formatQuantity(customizableProfileQuantity, isMonthly)}
            </span>
        </li>
    );

    let total: number;

    if (hasAddons) {
        total = QUANTITIES.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    } else {
        total = billingPeriodQuantity;
    }

    return (
        <StyledFinishingUp as="section">
            <StyledFinishingUpContent>
                <StyledHeading as="h1">Finishing up</StyledHeading>
                <StyledStepDescription>
                    Double-check everything looks OK before confirming.
                </StyledStepDescription>
                <StyledFinishingUpSummary>
                    <StyledFinishingUpPlanInfo>
                        <StyledFinishingUpHeading as="h3">
                            {plan} ({billingPeriod})
                        </StyledFinishingUpHeading>
                        <StyledFinishingUpLinkContainer>
                            <Link to="/select-plan">Change</Link>
                        </StyledFinishingUpLinkContainer>
                        <StyledFinishingUpBillingPeriodQuantity>
                            {formatQuantity(billingPeriodQuantity, isMonthly)}
                        </StyledFinishingUpBillingPeriodQuantity>
                    </StyledFinishingUpPlanInfo>
                    <StyledFinishingUpAddonsInfo>
                        {hasAddons && (
                            <StyledFinishingUpAddons>
                                {pickAddons.onlineService &&
                                    onlineServiceContent}
                                {pickAddons.largerStorage &&
                                    largerStorageContent}
                                {pickAddons.customizableProfile &&
                                    customizableProfileContent}
                            </StyledFinishingUpAddons>
                        )}
                    </StyledFinishingUpAddonsInfo>
                </StyledFinishingUpSummary>
                <StyledFinishingUpTotalInfo>
                    <p>Total (per {isMonthly ? 'month' : 'year'})</p>
                    <StyledFinishingUpTotalQuantity>
                        +{formatQuantity(total, isMonthly)}
                    </StyledFinishingUpTotalQuantity>
                </StyledFinishingUpTotalInfo>
                <StyledButtonContainer>
                    <Button
                        id="back"
                        type="button"
                        onClick={() => navigate('/pick-addons')}
                        kind="back"
                    >
                        Go Back
                    </Button>
                    <Button
                        id="confirm"
                        type="button"
                        onClick={() => {
                            dispatch(completeForm());
                            navigate('/thank-you');
                        }}
                        kind="confirm"
                    >
                        Confirm
                    </Button>
                </StyledButtonContainer>
            </StyledFinishingUpContent>
        </StyledFinishingUp>
    );
};

export default FinishingUp;
