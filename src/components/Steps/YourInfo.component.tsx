import { useNavigate } from 'react-router-dom';
import { useForm, FieldErrors } from 'react-hook-form';
import StyledYourInfo from '../styled/YourInfo.styled';
import StyledForm from '../styled/Form.styled';
import FormControl from '../Form/FormControl.component';
import { EMAIL_REGEX, PHONE_REGEX } from '../../utils/constants';

type YourInfo = {
    name: string | undefined;
    email: string | undefined;
    phone: string | undefined;
};

const defaultValues = {
    name: undefined,
    email: undefined,
    phone: undefined,
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
                    <FormControl
                        labelText="Name"
                        errorMessage={errors.name?.message}
                    >
                        <input
                            type="text"
                            id="name"
                            placeholder="e.g. Stephen King"
                            disabled={isSubmitting}
                            {...register('name', {
                                required: 'This field is required',
                            })}
                        />
                    </FormControl>
                    <FormControl
                        labelText="Email Address"
                        errorMessage={errors.email?.message}
                    >
                        <input
                            type="email"
                            id="email"
                            placeholder="e.g. stephenking@lorem.com"
                            disabled={isSubmitting}
                            {...register('email', {
                                required: 'This field is required',
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message:
                                        'Please input a valid email address',
                                },
                            })}
                        />
                    </FormControl>
                    <FormControl
                        labelText="Phone Number"
                        errorMessage={errors.phone?.message}
                    >
                        <input
                            type="text"
                            id="phone"
                            placeholder="e.g. +1 234 567 890"
                            disabled={isSubmitting}
                            {...register('phone', {
                                required: 'This field is required',
                                pattern: {
                                    value: PHONE_REGEX,
                                    message:
                                        'Please input a valid phone number',
                                },
                            })}
                        />
                    </FormControl>
                    <button type="submit" disabled={isSubmitting}>
                        Next
                    </button>
                </StyledForm>
            </div>
        </StyledYourInfo>
    );
};

export default YourInfo;
