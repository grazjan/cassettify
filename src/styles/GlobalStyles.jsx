import { createGlobalStyle } from "styled-components"

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${props => props.theme.colors.bodyBgColor};
    } 
    .container, .container-sm, .container-md {
        margin-left: auto;
        margin-right: auto;
    }
    .container {
        max-width: ${props => props.theme.container.containerWidth};
    }
    .container-md {
        max-width: ${props => props.theme.container.containerWidthMd};
    }
    .container-sm {
        max-width: ${props => props.theme.container.containerWidthSm};
    }
    .text-center {
        text-align: center;
    }
    .text-left {
        text-align: left;
    }
    .text-right {
        text-align: right;
    }
`

export default globalStyles