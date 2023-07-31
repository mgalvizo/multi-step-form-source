import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import StyledPickAddons from '../styled/Steps/PickAddons.styled';
import StyledHeading from '../styled/UI/Heading.styled';
import StyledForm from '../styled/Form/Form.styled';
import Button from '../UI/Button.component';
import { PickAddonsTypeData } from '../../utils/types';
import {
    getSelectPlan,
    updatePickAddons,
    getPickAddons,
} from '../Form/formSlice';
import FormCheckboxControl from '../Form/FormCheckboxControl.component';

const PickAddons = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { billingPeriod } = useSelector(getSelectPlan);

    let defaultValues: PickAddonsTypeData | undefined;

    const pickAddons = useSelector(getPickAddons);

    if (!pickAddons.isStepTouched) {
        defaultValues = {
            onlineService: true,
            largerStorage: true,
            customizableProfile: false,
        };
    }

    if (pickAddons.isStepTouched) {
        defaultValues = { ...pickAddons };
    }

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<PickAddonsTypeData>({ defaultValues });

    const onSubmit: SubmitHandler<PickAddonsTypeData> = (data, e) => {
        const { target } = e as MouseEvent<HTMLButtonElement, MouseEvent>;

        dispatch(updatePickAddons(data));

        if ((target as HTMLButtonElement).id === 'back') {
            navigate('/select-plan');
        }

        if ((target as HTMLButtonElement).id === 'next') {
            navigate('/finishing-up');
        }
    };

    return (
        <StyledPickAddons className="component">
            <div className="component__content">
                <StyledHeading as="h1">Pick add-ons</StyledHeading>
                <p className="step-description">
                    Add-ons help enhance your gaming experience.
                </p>
                <StyledForm
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <fieldset>
                        <legend className="visually-hidden">
                            Pick add-ons
                        </legend>
                        <FormCheckboxControl
                            labelText="Online service"
                            extraText="Access to multiplayer games"
                            billingQuantity={
                                billingPeriod.monthly ? '+$1/mo' : '+$10/yr'
                            }
                        >
                            <input
                                className="visually-hidden"
                                type="checkbox"
                                id="onlineService"
                                disabled={isSubmitting}
                                {...register('onlineService')}
                            />
                        </FormCheckboxControl>
                        <FormCheckboxControl
                            labelText="Larger storage"
                            extraText="Extra 1TB of cloud save"
                            billingQuantity={
                                billingPeriod.monthly ? '+$2/mo' : '+$20/yr'
                            }
                        >
                            <input
                                className="visually-hidden"
                                type="checkbox"
                                id="largerStorage"
                                disabled={isSubmitting}
                                {...register('largerStorage')}
                            />
                        </FormCheckboxControl>
                        <FormCheckboxControl
                            labelText="Customizable profile"
                            extraText="Custom theme on your profile"
                            billingQuantity={
                                billingPeriod.monthly ? '+$2/mo' : '+$20/yr'
                            }
                        >
                            <input
                                className="visually-hidden"
                                type="checkbox"
                                id="customizableProfile"
                                disabled={isSubmitting}
                                {...register('customizableProfile')}
                            />
                        </FormCheckboxControl>
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
        </StyledPickAddons>
    );
};

export default PickAddons;
