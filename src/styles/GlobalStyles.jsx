import { createGlobalStyle } from "styled-components"

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${props => props.theme.colors.bodyBgColor};
        font-family: ${props => props.theme.typography.fontFamily};
        font-size: ${props => props.theme.typography.fontSize};
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
    ul, ol {
        margin: 0;
        padding: 0;
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