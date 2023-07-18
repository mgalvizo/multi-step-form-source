import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import StyledPickAddons from '../styled/PickAddons.styled';
import StyledHeading from '../styled/Heading.styled';
import StyledForm from '../styled/Form.styled';
import Button from '../UI/Button.component';
import { PickAddonsType } from '../../utils/types';
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

    let defaultValues: PickAddonsType | undefined;

    const pickAddons = useSelector(getPickAddons);

    if (!pickAddons) {
        defaultValues = {
            onlineService: true,
            largerStorage: true,
            customizableProfile: false,
        };
    }

    if (pickAddons) {
        defaultValues = { ...pickAddons };
    }

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<PickAddonsType>({ defaultValues });

    const goBack = () => {
        handleSubmit(onSubmit)();
        navigate('/select-plan');
    };

    const goNext = () => {
        handleSubmit(onSubmit)();
        navigate('/finishing-up');
    };

    const onSubmit = (data: PickAddonsType) => {
        dispatch(updatePickAddons(data));
    };

    return (
        <StyledPickAddons className="component">
            <div className="component__content">
                <StyledHeading as="h1">Pick add-ons</StyledHeading>
                <p>Add-ons help enhance your gaming experience.</p>
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
                                type="checkbox"
                                id="customizableProfile"
                                disabled={isSubmitting}
                                {...register('customizableProfile')}
                            />
                        </FormCheckboxControl>
                    </fieldset>
                    <Button
                        type="button"
                        onClick={goBack}
                        disabled={isSubmitting}
                    >
                        Go Back
                    </Button>
                    <Button
                        type="button"
                        onClick={goNext}
                        disabled={isSubmitting}
                    >
                        Next Step
                    </Button>
                </StyledForm>
            </div>
        </StyledPickAddons>
    );
};

export default PickAddons;
