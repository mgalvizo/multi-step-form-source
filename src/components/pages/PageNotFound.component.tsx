import { useNavigate } from 'react-router-dom';
import StyledPageNotFound from '../styled/Pages/PageNotFound.styled';
import StyledHeading from '../styled/UI/Heading.styled';
import Button from '../UI/Button.component';

const PageNotFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <StyledPageNotFound>
            <div className="app__layout">
                <div className="app-layout__content">
                    <StyledHeading as="h1">
                        We can't find the page you're looking for.
                    </StyledHeading>
                    <Button
                        id="back"
                        type="button"
                        onClick={goBack}
                        kind="back"
                    >
                        Go Back
                    </Button>
                </div>
            </div>
        </StyledPageNotFound>
    );
};

export default PageNotFound;
