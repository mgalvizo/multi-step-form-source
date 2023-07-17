import GlobalStyle from './components/styled/GlobalStyle.styled';
import Attribution from './components/Attribution.component';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <div className="root__content">
                App
                <Attribution />
            </div>
        </>
    );
};

export default App;
