import StyledThankYou from '../styled/Steps/ThankYou.styled';
import StyledHeading from '../styled/UI/Heading.styled';
import { ReactComponent as TYIcon } from '../../assets/icon-thank-you.svg';

const ThankYou = () => {
    return (
        <StyledThankYou className="component">
            <div className="component__content">
                <TYIcon />
                <StyledHeading as="h1">Thank you!</StyledHeading>
                <p className="step-description">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </StyledThankYou>
    );
};

export default ThankYou;
