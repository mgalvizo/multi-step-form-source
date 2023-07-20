import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import StyledPersonalInfo from '../styled/Steps/PersonalInfo.styled';
import StyledForm from '../styled/Form/Form.styled';
import StyledHeading from '../styled/UI/Heading.styled';
import FormInputControl from '../Form/FormInputControl.component';
import { EMAIL_REGEX, PHONE_REGEX } from '../../utils/constants';
import Button from '../UI/Button.component';
import { getPersonalInfo, updatePersonalInfo } from '../Form/formSlice';
import { PersonalInfoType } from '../../utils/types';

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let defaultValues: PersonalInfoType | undefined;

    const personalInfo = useSelector(getPersonalInfo);

    const isPersonalInfoEmpty = Object.values(personalInfo).every(
        value => value === ''
    );

    if (isPersonalInfoEmpty) {
        defaultValues = {
            name: '',
            email: '',
            phone: '',
        };
    }

    if (!isPersonalInfoEmpty) {
        defaultValues = { ...personalInfo };
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<PersonalInfoType>({ defaultValues });

    const onSubmit = (data: PersonalInfoType): void => {
        dispatch(updatePersonalInfo(data));
        navigate('/select-plan');
    };

    return (
        <StyledPersonalInfo className="component">
            <div className="component__content">
                <StyledHeading as="h1">Personal Info</StyledHeading>
                <p className="step-description">
                    Please provide your name, email address, and phone number.
                </p>
                <StyledForm
                    onSubmit={handleSubmit(onSubmit)}
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
                                placeholder="e.g. +1 123 456 7890"
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
                    <div className="button__container">
                        <Button
                            type="submit"
                            kind="next"
                            disabled={isSubmitting}
                        >
                            Next Step
                        </Button>
                    </div>
                </StyledForm>
            </div>
        </StyledPersonalInfo>
    );
};

export default PersonalInfo;
