import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldErrors } from 'react-hook-form';
import StyledYourInfo from '../styled/YourInfo.styled';
import StyledForm from '../styled/Form.styled';
import StyledHeading from '../styled/Heading.styled';
import FormInputControl from '../Form/FormInputControl.component';
import { EMAIL_REGEX, PHONE_REGEX } from '../../utils/constants';
import Button from '../UI/Button.component';
import { getYourInfo, updateYourInfo } from '../Form/formSlice';
import { YourInfoType } from '../../utils/types';

const YourInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let defaultValues: YourInfoType | undefined;

    const yourInfo = useSelector(getYourInfo);

    if (!yourInfo) {
        defaultValues = {
            name: '',
            email: '',
            phone: '',
        };
    }

    if (yourInfo) {
        defaultValues = { ...yourInfo };
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<YourInfoType>({ defaultValues });

    const onSubmit = (data: YourInfoType): void => {
        dispatch(updateYourInfo(data));
        navigate('/select-plan');
    };

    const onError = (errors: FieldErrors): void => {
        console.log(errors);
    };

    return (
        <StyledYourInfo className="component">
            <div className="component__content">
                <StyledHeading as="h1">Personal Info</StyledHeading>
                <p>
                    Please provide your name, email address, and phone number.
                </p>
                <StyledForm
                    onSubmit={handleSubmit(onSubmit, onError)}
                    autoComplete="off"
                >
                    <fieldset>
                        <legend className="visually-hidden">
                            Personal Info
                        </legend>
                        <FormInputControl
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
                        </FormInputControl>
                        <FormInputControl
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
                        </FormInputControl>
                        <FormInputControl
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
                        </FormInputControl>
                    </fieldset>
                    <Button type="submit" disabled={isSubmitting}>
                        Next Step
                    </Button>
                </StyledForm>
            </div>
        </StyledYourInfo>
    );
};

export default YourInfo;
