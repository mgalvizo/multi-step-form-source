import StyledAttribution from './styled/Attribution.styled';

const Attribution = () => {
    return (
        <StyledAttribution className="component">
            <div className="component__content">
                <div className="attribution">
                    <p>
                        Challenge by{' '}
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Frontend Mentor
                        </a>
                        . Coded by{' '}
                        <a href="https://www.frontendmentor.io/profile/mgalvizo">
                            mgalvizo
                        </a>
                        .
                    </p>
                </div>
            </div>
        </StyledAttribution>
    );
};

export default Attribution;
