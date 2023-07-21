import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import StyledSelectPlan from '../styled/Steps/SelectPlan.styled';
import StyledForm from '../styled/Form/Form.styled';
import Button from '../UI/Button.component';
import { SelectPlanType } from '../../utils/types';
import { getSelectPlan, updateSelectPlan } from '../Form/formSlice';
import StyledHeading from '../styled/UI/Heading.styled';
import FormRadioControl from '../Form/FormRadioControl.component';
import { ReactComponent as Arcade } from '../../assets/icon-arcade.svg';
import { ReactComponent as Advanced } from '../../assets/icon-advanced.svg';
import { ReactComponent as Pro } from '../../assets/icon-pro.svg';
import FormSwitchControl from '../Form/FormSwitchControl.component';

const SelectPlan = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let defaultValues: SelectPlanType | undefined;

    const selectPlan = useSelector(getSelectPlan);

    const isPlanEmpty = selectPlan.plan === '';
    const isBillingPeriodUnselected = Object.values(
        selectPlan.billingPeriod
    ).every(value => value === false);

    if (isPlanEmpty && isBillingPeriodUnselected) {
        // true will make billingPeriod.monthly === true
        // false will make billingPeriod.yearly === true
        defaultValues = {
            plan: 'arcade',
            billingPeriod: true,
        };
    }

    if (!isPlanEmpty && !isBillingPeriodUnselected) {
        if (selectPlan.billingPeriod.monthly) {
            defaultValues = { ...selectPlan, billingPeriod: true };
        }

        if (selectPlan.billingPeriod.yearly) {
            defaultValues = { ...selectPlan, billingPeriod: false };
        }
    }

    const {
        watch,
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SelectPlanType>({ defaultValues });

    const watchBillingPeriod = watch('billingPeriod');

    const onSubmit: SubmitHandler<SelectPlanType> = (data, e) => {
        const { target } = e as MouseEvent<HTMLButtonElement, MouseEvent>;
        // data would NOT match Redux state since checkbox only returns true or false
        // Redux is converting that result into the proper Redux data shape
        dispatch(updateSelectPlan(data));

        if ((target as HTMLButtonElement).id === 'back') {
            navigate('/personal-info');
        }

        if ((target as HTMLButtonElement).id === 'next') {
            navigate('/pick-addons');
        }
    };

    return (
        <StyledSelectPlan className="component">
            <div className="component__content">
                <StyledHeading as="h1">Select your plan</StyledHeading>
                <p className="step-description">
                    You have the option of monthly or yearly billing.
                </p>
                <StyledForm
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <fieldset className="plan-field">
                        <legend className="visually-hidden">Select Plan</legend>
                        <FormRadioControl
                            labelText="Arcade"
                            billingQuantity={
                                watchBillingPeriod ? '$9/mo' : '$90/yr'
                            }
                            isMonthly={watchBillingPeriod}
                            icon={<Arcade />}
                        >
                            <input
                                type="radio"
                                value="arcade"
                                id="arcade"
                                className="visually-hidden"
                                disabled={isSubmitting}
                                {...register('plan')}
                            />
                        </FormRadioControl>
                        <FormRadioControl
                            labelText="Advanced"
                            billingQuantity={
                                watchBillingPeriod ? '$12/mo' : '$120/yr'
                            }
                            isMonthly={watchBillingPeriod}
                            icon={<Advanced />}
                        >
                            <input
                                type="radio"
                                value="advanced"
                                id="advanced"
                                className="visually-hidden"
                                disabled={isSubmitting}
                                {...register('plan')}
                            />
                        </FormRadioControl>
                        <FormRadioControl
                            labelText="Pro"
                            billingQuantity={
                                watchBillingPeriod ? '$15/mo' : '$150/yr'
                            }
                            isMonthly={watchBillingPeriod}
                            icon={<Pro />}
                        >
                            <input
                                type="radio"
                                value="pro"
                                id="pro"
                                className="visually-hidden"
                                disabled={isSubmitting}
                                {...register('plan')}
                            />
                        </FormRadioControl>
                    </fieldset>
                    <fieldset className="billing-period-field">
                        <legend className="visually-hidden">
                            Select Billing Period
                        </legend>
                        <FormSwitchControl labelText="Billing Period">
                            <input
                                className="visually-hidden"
                                type="checkbox"
                                id="billingPeriod"
                                disabled={isSubmitting}
                                {...register('billingPeriod')}
                            />
                        </FormSwitchControl>
                    </fieldset>
                    <div className="button__container">
                        <Button
                            id="back"
                            type="button"
                            kind="back"
                            onClick={e => handleSubmit(onSubmit)(e)}
                            disabled={isSubmitting}
                        >
                            Go Back
                        </Button>
                        <Button
                            id="next"
                            type="button"
                            kind="next"
                            onClick={e => handleSubmit(onSubmit)(e)}
                            disabled={isSubmitting}
                        >
                            Next Step
                        </Button>
                    </div>
                </StyledForm>
            </div>
        </StyledSelectPlan>
    );
};

export default SelectPlan;
