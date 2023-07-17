import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    /* COLORS */
    --input-border-color: #D6D9E6;
    --light-denim: #164A8A;
    --denim: #022959;
    --very-light-gray: #F8F9FF;
    --light-gray: #D6D9E6;
    --gray: #9699AA;
    --light-blue: #ABBCFF;
    --orange: #FFAF7E;
    --pink: #F9818E;
    --purple: #483EFF;
    --red-errors: #EE374A;
    --sky-blue: #BEE2FD;
    --white: #fff;
    --black: #000;
    /* WEBSITE */
    --website-font: 'Ubuntu', sans-serif;
    --website-padding-sm: 8px;
    --website-padding-md: 16px;
    --website-padding-lg: 32px;
    --website-margin-sm: 8px;
    --website-margin-md: 16px;
    --website-margin-lg: 32px;
    --base-font-size: 62.5%;
    /* BODY */
    --body-font-size: 1.6rem;
    --body-line-height: 1.5;
    --body-background-color: #EFF5FF;
    --body-font-color: var(--denim);
    /* CARD */
    --card-border-radius: 10px;
    --card-box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
    /* STEPS */
    --ellipse-size: 33px;
    --ellipse-number-size: 1.4rem;
    --ellipse-color: var(--white);
    --step-text-size: 1.2rem;
    --step-title-size: 1.4rem;
    /* INPUTS */
    --input-border-radius: 8px;
    --input-size: 48px;
    --toggler-size: 20px;
    --toggler-ball-size: 12px;
    --checkbox-size: 20px;
    /* BUTTONS */
    --button-border-radius: 4px;
    /* ATTRIBUTION */
    --attribution-radius: 10px;
    --attribution-box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    border: 0;
    
}

html {
    width: 100%;
    font-size: var(--base-font-size);
    font-family: sans-serif;
    box-sizing: border-box;
}

body {
    color: var(--body-font-color);
    font-size: var(--body-font-size);
    line-height: var(--body-line-height);
    overflow-x: hidden;
    font-family: var(--website-font);
    background-color: var(--body-background-color);
}

img {
    width: auto;
    max-width: 100%;
    vertical-align: middle;
}

a:visited,
a:link {
    color: var(--purple);
    text-decoration: none;
}

a:visited:hover,
a:link:hover {
    text-decoration: underline;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(1px 1px 1px 1px);
    /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
}

.root__content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: hidden;
}
`;

export default GlobalStyle;
