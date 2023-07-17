import { useNavigate } from 'react-router-dom';
import { useForm, FieldErrors } from 'react-hook-form';
import StyledYourInfo from '../styled/YourInfo.styled';
import StyledForm from '../styled/Form.styled';

type YourInfo = {
    name: string | undefined;
    email: string | undefined;
    message: string | undefined;
};

const defaultValues = {
    name: undefined,
    email: undefined,
    message: undefined,
};

const YourInfo = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<YourInfo>({ defaultValues });

    const onSubmit = (data: YourInfo): void => {
        console.log(data);
        navigate('/select-plan');
    };

    const onError = (errors: FieldErrors): void => {
        console.log(errors);
    };

    return (
        <StyledYourInfo className="component">
            <div className="component__content">
                <StyledForm
                    onSubmit={handleSubmit(onSubmit, onError)}
                    autoComplete="off"
                >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="e.g. Stephen King"
                        disabled={isSubmitting}
                        {...register('name', {
                            required: 'This field is required',
                        })}
                    />
                    {errors.name?.message && <span>{errors.name.message}</span>}
                    <button type="submit" disabled={isSubmitting}>
                        Next
                    </button>
                </StyledForm>
            </div>
        </StyledYourInfo>
    );
};

export default YourInfo;
