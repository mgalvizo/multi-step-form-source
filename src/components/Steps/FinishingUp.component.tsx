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
            Online Service + {formatQuantity(onlineServiceQuantity, isMonthly)}
        </li>
    );

    const largerStorageContent = (
        <li>
            Larger storage + {formatQuantity(largerStorageQuantity, isMonthly)}
        </li>
    );

    const customizableProfileContent = (
        <li>
            Customizable profile +
            {formatQuantity(customizableProfileQuantity, isMonthly)}
        </li>
    );

    let result: number;

    if (hasAddons) {
        result = QUANTITIES.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
    } else {
        result = billingPeriodQuantity;
    }

    return (
        <StyledFinishingUp className="component">
            <div className="component__content">
                <StyledHeading as="h1">Finishing up</StyledHeading>
                <p>Double-check everything looks OK before confirming.</p>
                <div className="summary">
                    <StyledHeading as="h3">
                        {plan} ({billingPeriod})
                    </StyledHeading>
                    <p>
                        <Link to="/select-plan">Change</Link>
                    </p>
                    <p>{formatQuantity(billingPeriodQuantity, isMonthly)}</p>
                    {hasAddons && (
                        <ul className="addons">
                            {pickAddons.onlineService && onlineServiceContent}
                            {pickAddons.largerStorage && largerStorageContent}
                            {pickAddons.customizableProfile &&
                                customizableProfileContent}
                        </ul>
                    )}
                    <p>
                        Total (per {isMonthly ? 'month' : 'year'}){' '}
                        {formatQuantity(result, isMonthly)}
                    </p>
                </div>
                <Button type="button" onClick={goBack}>
                    Go Back
                </Button>
                <Button type="button" onClick={goNext}>
                    Next Step
                </Button>
            </div>
        </StyledFinishingUp>
    );
};

export default FinishingUp;
