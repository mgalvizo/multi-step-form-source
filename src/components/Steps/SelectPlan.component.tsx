import { useNavigate } from 'react-router-dom';
import { useForm, FieldErrors } from 'react-hook-form';
import StyledSelectPlan from '../styled/SelectPlan.styled';
import StyledForm from '../styled/Form.styled';
import Button from '../UI/Button.component';
import { useMoveBack } from '../../hooks/useMoveBack';

type SelectPlan = {
    plan: {
        arcade: boolean;
        advanced: boolean;
        pro: boolean;
    };
    period: {
        monthly: boolean;
        yearly: boolean;
    };
};

const defaultValues = {
    plan: {
        arcade: true,
        advanced: false,
        pro: false,
    },
    period: {
        monthly: true,
        yearly: false,
    },
};

const SelectPlan = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SelectPlan>({ defaultValues });

    const moveBack = useMoveBack();

    return (
        <StyledSelectPlan className="component">
            <div className="component__content">
                <StyledForm>
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
