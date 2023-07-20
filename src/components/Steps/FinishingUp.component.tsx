import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import StyledFinishingUp from '../styled/Steps/FinishingUp.styled';
import StyledHeading from '../styled/UI/Heading.styled';
import Button from '../UI/Button.component';
import { getFormState, completeForm } from '../Form/formSlice';
import { formatQuantity } from '../../utils/helpers';

const FinishingUp = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { selectPlan, pickAddons } = useSelector(getFormState);

    const goBack = () => {
        navigate('/pick-addons');
    };

    const goNext = () => {
        dispatch(completeForm(null));
        navigate('/thank-you');
    };

    const plan = `${selectPlan.plan
        .charAt(0)
        .toUpperCase()}${selectPlan.plan.slice(1)}`;

    const isMonthly = selectPlan.billingPeriod.monthly;

    const hasAddons = Object.values(pickAddons).some(value => value === true);

    const billingPeriod = isMonthly ? 'Monthly' : 'Yearly';

    const billingPeriodQuantity = isMonthly ? 9 : 90;

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
        <StyledFinishingUp className="component">
            <div className="component__content">
                <StyledHeading as="h1">Finishing up</StyledHeading>
                <p className="step-description">
                    Double-check everything looks OK before confirming.
                </p>
                <div className="summary">
                    <div className="plan__info">
                        <StyledHeading as="h3">
                            {plan} ({billingPeriod})
                        </StyledHeading>
                        <p className="link__container">
                            <Link to="/select-plan">Change</Link>
                        </p>
                        <strong className="billing-period-quantity">
                            {formatQuantity(billingPeriodQuantity, isMonthly)}
                        </strong>
                    </div>
                    <div className="addons__info">
                        {hasAddons && (
                            <ul className="addons">
                                {pickAddons.onlineService &&
                                    onlineServiceContent}
                                {pickAddons.largerStorage &&
                                    largerStorageContent}
                                {pickAddons.customizableProfile &&
                                    customizableProfileContent}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="total__info">
                    <p>Total (per {isMonthly ? 'month' : 'year'})</p>
                    <strong className="total-quantity">
                        +{formatQuantity(total, isMonthly)}
                    </strong>
                </div>
                <Button type="button" onClick={goBack} kind="back">
                    Go Back
                </Button>
                <Button type="button" onClick={goNext} kind="confirm">
                    Confirm
                </Button>
            </div>
        </StyledFinishingUp>
    );
};

export default FinishingUp;
