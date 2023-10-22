import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --max-content-width: 940px;
    --max-design-width: 1440px;
    --base-fsz: 62.5%;
    --body-ffam: 'Ubuntu', sans-serif;
    --body-fsz: 1.6rem;
    --body-lht: 1.5;
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
    --light-purple: #928CFF;
    --red-errors: #EE374A;
    --sky-blue: #BEE2FD;
    --white: #fff;
    --black: #000;
    /* SPACING */
    --web-padding-xs: 4px;
    --web-padding-s: 8px;
    --web-padding-m: 16px;
    --web-padding-l: 24px;
    --web-padding-xl: 32px;
    --web-padding-xl2: 40px;
    --web-margin-xs: 4px;
    --web-margin-s: 8px;
    --web-margin-m: 16px;
    --web-margin-l: 24px;
    --web-margin-xl: 32px;
    --web-margin-xl2: 40px;
    /* BODY */
    --body-bg-color: #EFF5FF;
    --body-font-color: var(--denim);
    /* FORM */
    --form-border-radius: 10px;
    --form-box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
    /* STEPS */
    --ellipse-sz: 33px;
    --ellipse-number-sz: 1.4rem;
    --ellipse-color: var(--white);
    --step-text-sz: 1.2rem;
    --step-title-sz: 1.4rem;
    --step-title-letter-spacing: 1px;
    /* HEADINGS */
    --h1-fsz-s: 2.4rem;
    --h1-fsz-l: 3.2rem;
    --h3-fsz: 1.6rem;
    /* INPUTS */
    --label-fsz-s: 1.2rem;
    --label-fsz-l: 1.4rem;
    --label-lht: 1;
    --input-border-rad: 8px;
    --input-text-border-rad: 4px;
    --input-sz-s: 40px;
    --input-sz-l: 48px;
    --input-fsz-s: 1.5rem;
    --input-fsz-m: 1.6rem;
    --switch-wt: 38px;
    --switch-ht: 20px;
    --toggler-ball-sz: 12px;
    --checkbox-sz: 20px;
    --checkbox-border-radius: 6px;
    --checkmark-wt: 3px;
    --checkmark-ht: 7px;
    /* BUTTONS */
    --button-border-rad: 4px;
    --button-fsz-s: 1.2rem;
    --button-fsz-l: 1.4rem;
    /* */
    /* MEDIA */
    --media-min: 20em; /* 320px */
    --media-tablet: 30em; /* 480px */
    --media-tablet-small-desktop: 38.75em; /* 620px */
    --media-small-desktop: 48em; /* 768px */
    --media-s-l-desktop: 56.25em; /* 900px */
    --media-large-desktop: 64em; /* 1024px */
    --large-desktop-max: 77em; /* 1232px */
    --media-max: 90em; /* 1440px */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    border: 0;
    
}

html {
    width: 100%;
    box-sizing: border-box;
    font-size: var(--base-fsz);
    font-family: sans-serif;
    overflow-y: scroll;
    scrollbar-gutter: stable;
}

body {
    background-color: var(--body-bg-color);
    color: var(--body-font-color);
    font-size: var(--body-fsz);
    font-family: var(--body-ffam);
    line-height: var(--body-lht);
    overflow-x: hidden;
}

main,
footer {
    width: 100%;
}

img,
svg {
    width: auto;
    max-width: 100%;
    vertical-align: middle;
}

a:visited,
a:link {
    color: var(--gray);
    text-decoration: underline;
}

a:visited:hover,
a:link:hover {
    color: var(--purple);
}

#root {
    min-height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: start;
    align-items: start;
    overflow-x: hidden;
    position: relative;
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

// 480px
@media only screen and (min-width: 30em) {}

// 620px
@media only screen and (min-width: 38.75em) {}

// 768px
@media only screen and (min-width: 48em) {
    #root {
        justify-content: center;
    }

    section {
        position: relative;
        height: 100%;
    }
}

// 900px
@media only screen and (min-width: 56.25em) {}

// 1024px
@media only screen and (min-width: 64em) {}

// 1232px
@media only screen and (min-width: 77em) {}

// 1336px
@media only screen and (min-width: 83.5em) {}

// 1440px
@media only screen and (min-width: 90em) {}
`;

export default GlobalStyle;
