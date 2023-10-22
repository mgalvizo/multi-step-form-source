import { MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
    StyledPersonalInfo,
    StyledPersonalInfoContent,
    StyledPersonalInfoButtonContainer,
} from '../styled/Steps/PersonalInfo.styled';
import {
    StyledStepDescription,
    StyledVisuallyHidden,
    StyledFieldset,
} from '../styled/Pages/AppLayout.styled';
import StyledForm from '../styled/Form/Form.styled';
import StyledHeading from '../styled/UI/Heading.styled';
import FormInputControl from '../Form/FormInputControl.component';
import { EMAIL_REGEX, PHONE_REGEX } from '../../utils/constants';
import Button from '../UI/Button.component';
import { getPersonalInfo, updatePersonalInfo } from '../Form/formSlice';
import { PersonalInfoTypeData } from '../../utils/types';

const PersonalInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let defaultValues: PersonalInfoTypeData | undefined;

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
    } = useForm<PersonalInfoTypeData>({ defaultValues });

    const onSubmit: SubmitHandler<PersonalInfoTypeData> = (data, e) => {
        const { target } = e as MouseEvent<HTMLButtonElement, MouseEvent>;

        dispatch(updatePersonalInfo(data));

        if ((target as HTMLButtonElement).id === 'next') {
            navigate('/select-plan');
        }
    };

    return (
        <StyledPersonalInfo as="section">
            <StyledPersonalInfoContent>
                <StyledHeading as="h1">Personal Info</StyledHeading>
                <StyledStepDescription>
                    Please provide your name, email address, and phone number.
                </StyledStepDescription>
                <StyledForm
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    <StyledFieldset>
                        <legend>
                            <StyledVisuallyHidden>
                                Personal Info
                            </StyledVisuallyHidden>
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
                    </StyledFieldset>
                    <StyledPersonalInfoButtonContainer>
                        <Button
                            type="button"
                            id="next"
                            kind="next"
                            onClick={e => handleSubmit(onSubmit)(e)}
                            disabled={isSubmitting}
                        >
                            Next Step
                        </Button>
                    </StyledPersonalInfoButtonContainer>
                </StyledForm>
            </StyledPersonalInfoContent>
        </StyledPersonalInfo>
    );
};

export default PersonalInfo;
