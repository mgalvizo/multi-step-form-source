import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import StyledSelectPlan from '../styled/SelectPlan.styled';
import StyledForm from '../styled/Form.styled';
import Button from '../UI/Button.component';
import { useMoveBack } from '../../hooks/useMoveBack';
import { SelectPlanType } from '../../utils/types';
import { getSelectPlan, updateSelectPlan } from '../Form/formSlice';
import StyledHeading from '../styled/Heading.styled';
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

    if (!selectPlan) {
        defaultValues = {
            plan: 'arcade',
            billingPeriod: 'monthly',
        };
    }

    if (selectPlan) {
        defaultValues = { ...selectPlan };
    }

    const {
        watch,
        register,
        handleSubmit,
        formState: { isSubmitting },
        getValues,
    } = useForm<SelectPlanType>({ defaultValues });

    const watchBillingPeriod = watch('billingPeriod');
    console.log(watchBillingPeriod);

    const moveBack = useMoveBack();

    const onSubmit = (data: SelectPlanType) => {
        dispatch(updateSelectPlan(data));
    };

    return (
        <StyledSelectPlan className="component">
            <div className="component__content">
                <StyledHeading as="h1">Select your plan</StyledHeading>
                <p>You have the option of monthly or yearly billing.</p>
                <StyledForm
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <fieldset>
                        <legend>Select Plan</legend>
                        <FormRadioControl
                            labelText="Arcade"
                            billingQuantity={
                                watchBillingPeriod === 'monthly'
                                    ? '$9/mo'
                                    : '$90/yr'
                            }
                            period={watchBillingPeriod}
                            icon={<Arcade />}
                        >
                            <input
                                type="radio"
                                value="arcade"
                                id="arcade"
                                className="visually-hidden"
                                {...register('plan')}
                            />
                        </FormRadioControl>
                        <FormRadioControl
                            labelText="Advanced"
                            billingQuantity={
                                watchBillingPeriod === 'monthly'
                                    ? '$12/mo'
                                    : '$120/yr'
                            }
                            period={watchBillingPeriod}
                            icon={<Advanced />}
                        >
                            <input
                                type="radio"
                                value="advanced"
                                id="advanced"
                                className="visually-hidden"
                                {...register('plan')}
                            />
                        </FormRadioControl>
                        <FormRadioControl
                            labelText="Pro"
                            billingQuantity={
                                watchBillingPeriod === 'monthly'
                                    ? '$15/mo'
                                    : '$150/yr'
                            }
                            period={watchBillingPeriod}
                            icon={<Pro />}
                        >
                            <input
                                type="radio"
                                value="pro"
                                id="pro"
                                className="visually-hidden"
                                {...register('plan')}
                            />
                        </FormRadioControl>
                    </fieldset>
                    <fieldset>
                        <legend>Select Billing Period</legend>
                        <FormSwitchControl labelText="Monthly">
                            <input
                                type="radio"
                                value="monthly"
                                id="monthly"
                                {...register('billingPeriod')}
                            />
                        </FormSwitchControl>
                        <strong>ToggleSwitchDecoration</strong>
                        <FormSwitchControl labelText="Yearly">
                            <input
                                type="radio"
                                value="yearly"
                                id="yearly"
                                {...register('billingPeriod')}
                            />
                        </FormSwitchControl>
                    </fieldset>
                    <Button
                        type="button"
                        disabled={isSubmitting}
                        onClick={moveBack}
                    >
                        Go Back
                    </Button>
                    <Button type="submit" disabled={isSubmitting}>
                        Next Step
                    </Button>
                </StyledForm>
            </div>
        </StyledSelectPlan>
    );
};

export default SelectPlan;
