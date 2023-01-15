import { createGlobalStyle } from "styled-components"

let range = 11; // Note: begins from 0
let spaceValue = 16; // 16px
let spacing;

// Create spacing classes 
for (let i = 0; i < range; i++) {
    spacing += `
        /* Margins */
        .mt-${i} {
            margin-top: ${spaceValue * i}px 
        }
        .mb-${i} {
            margin-bottom: ${spaceValue * i}px 
        }
        .mr-${i} {
            margin-right: ${spaceValue * i}px 
        }
        .ml-${i} {
            margin-left: ${spaceValue * i}px 
        }
        .mx-${i} {
            margin-left: ${spaceValue * i}px; 
            margin-right: ${spaceValue * i}px;
        }
        .my-${i} {
            margin-top: ${spaceValue * i}px;
            margin-bottom: ${spaceValue * i}px;
        }
        /* Paddings */
        .pt-${i} {
            padding-top: ${spaceValue * i}px 
        }
        .pb-${i} {
            padding-bottom: ${spaceValue * i}px 
        }
        .pr-${i} {
            padding-right: ${spaceValue * i}px 
        }
        .pl-${i} {
            padding-left: ${spaceValue * i}px 
        }
        .px-${i} {
            padding-left: ${spaceValue * i}px; 
            padding-right: ${spaceValue * i}px;
        }
        .py-${i} {
            padding-top: ${spaceValue * i}px;
            padding-bottom: ${spaceValue * i}px;
        }
    `
}

const SpacingStyles = createGlobalStyle`
    ${spacing}
`

export default SpacingStyles;