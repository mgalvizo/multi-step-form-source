import StyledAttribution from './styled/Attribution.styled';

const Attribution = () => {
    return (
        <StyledAttribution>
            <div className="attribution">
                <div className="attribution__content">
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
