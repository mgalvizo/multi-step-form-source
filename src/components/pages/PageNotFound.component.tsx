import { useNavigate } from 'react-router-dom';
import StyledPageNotFound from '../styled/Pages/PageNotFound.styled';
import StyledHeading from '../styled/UI/Heading.styled';

const PageNotFound = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <StyledPageNotFound className="component">
            <div className="component__content">
                <StyledHeading as="h1">
                    We can't find the page you're looking for.
                </StyledHeading>
                <button type="button" onClick={goBack}>
                    Go Back
                </button>
            </div>
        </StyledPageNotFound>
    );
};

export default PageNotFound;
