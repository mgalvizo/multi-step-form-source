import StyledPageNotFound from '../styled/PageNotFound.styled';
import StyledHeading from '../styled/Heading.styled';
import { useMoveBack } from '../../hooks/useMoveBack';

const PageNotFound = () => {
    const moveBack = useMoveBack();

    return (
        <StyledPageNotFound className="component">
            <div className="component__content">
                <StyledHeading as="h1">
                    We can't find the page you're looking for.
                </StyledHeading>
                <button type="button" onClick={moveBack}>
                    Go Back
                </button>
            </div>
        </StyledPageNotFound>
    );
};

export default PageNotFound;
