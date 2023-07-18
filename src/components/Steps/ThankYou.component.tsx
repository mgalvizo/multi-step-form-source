import StyledThankYou from '../styled/ThankYou.styled';
import StyledHeading from '../styled/Heading.styled';
import { ReactComponent as TYIcon } from '../../assets/icon-thank-you.svg';

const ThankYou = () => {
    return (
        <StyledThankYou className="component">
            <div className="component__content">
                <TYIcon />
                <StyledHeading as="h1">Thank you!</StyledHeading>
                <p>
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </StyledThankYou>
    );
};

export default ThankYou;
