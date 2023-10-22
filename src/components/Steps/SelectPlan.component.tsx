import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
    StyledSelectPlan,
    StyledSelectPlanContent,
    StyledBillingPeriodField,
    StyledPlanField,
} from '../styled/Steps/SelectPlan.styled';
import {
    StyledStepDescription,
    StyledButtonContainer,
} from '../styled/Pages/AppLayout.styled';
import StyledForm from '../styled/Form/Form.styled';
import Button from '../UI/Button.component';
import { SelectPlanTypeData } from '../../utils/types';
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

    let defaultValues: SelectPlanTypeData | undefined;

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
    } = useForm<SelectPlanTypeData>({ defaultValues });

    const watchBillingPeriod = watch('billingPeriod');

    const onSubmit: SubmitHandler<SelectPlanTypeData> = (data, e) => {
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
        <StyledSelectPlan as="section">
            <StyledSelectPlanContent>
                <StyledHeading as="h1">Select your plan</StyledHeading>
                <StyledStepDescription>
                    You have the option of monthly or yearly billing.
                </StyledStepDescription>
                <StyledForm
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <StyledPlanField>
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
                                className="visually-hidden"
                                type="radio"
                                value="arcade"
                                id="arcade"
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
                                className="visually-hidden"
                                type="radio"
                                value="advanced"
                                id="advanced"
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
                                className="visually-hidden"
                                type="radio"
                                value="pro"
                                id="pro"
                                disabled={isSubmitting}
                                {...register('plan')}
                            />
                        </FormRadioControl>
                    </StyledPlanField>
                    <StyledBillingPeriodField>
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
                    </StyledBillingPeriodField>
                    <StyledButtonContainer>
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
                    </StyledButtonContainer>
                </StyledForm>
            </StyledSelectPlanContent>
        </StyledSelectPlan>
    );
};

export default SelectPlan;
