import { createGlobalStyle } from "styled-components"
import { tabletUp } from "./MediaQueries"

const TypographyStyles = createGlobalStyle`
    body {
        font-family: ${props => props.theme.typography.fontFamily};
        font-size: ${props => props.theme.typography.bodyFontSize};
        line-height 1.2;
    } 
    h1, h2, h3, h4, h5, h6 {
        line-height: 1.5;
        margin-bottom: 1rem; 
    }
    h1 {
        font-size: ${props => props.theme.typography.headlines.mobile.h1};
        letter-spacing: 1px;
    }
    h2 {
        font-size: ${props => props.theme.typography.headlines.mobile.h2};
    }
    h3 {
        font-size: ${props => props.theme.typography.headlines.mobile.h3};
    }
    h4 {
        font-size: ${props => props.theme.typography.headlines.mobile.h4};
    }
    h5 {
        font-size ${props => props.theme.typography.headlines.mobile.h5};
    }
    h6 {
        font-size: ${props => props.theme.typography.headlines.mobile.h6};
    }
    @media ${tabletUp()} {
        h1 {
            font-size: ${props => props.theme.typography.headlines.desktop.h1};
            letter-spacing: 1px;
        }
        h2 {
            font-size: ${props => props.theme.typography.headlines.desktop.h2};
        }
        h3 {
            font-size: ${props => props.theme.typography.headlines.desktop.h3};
        }
        h4 {
            font-size: ${props => props.theme.typography.headlines.desktop.h4};
        }
        h5 {
            font-size ${props => props.theme.typography.headlines.desktop.h5};
        }
        h6 {
            font-size: ${props => props.theme.typography.headlines.desktop.h6};
        }
    }
    ul, ol {
        margin: 0;
        padding: 0;
    }
`

export default TypographyStyles