import {
    StyledThankYou,
    StyledThankYouContent,
    StyledThankYouHeading,
} from '../styled/Steps/ThankYou.styled';
import { StyledStepDescription } from '../styled/Pages/AppLayout.styled';
import { ReactComponent as TYIcon } from '../../assets/icon-thank-you.svg';

const ThankYou = () => {
    return (
        <StyledThankYou as="section">
            <StyledThankYouContent>
                <TYIcon />
                <StyledThankYouHeading as="h1">
                    Thank you!
                </StyledThankYouHeading>
                <StyledStepDescription>
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </StyledStepDescription>
            </StyledThankYouContent>
        </StyledThankYou>
    );
};

export default ThankYou;
