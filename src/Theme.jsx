/* App Theme settings */
/* *************************************** */


/* Colors */
const colors = {
    bodyBgColor: '#fab1a0',
    primary: "#1abc9c",
    secondary: "#2d3436",
    tertiary: "#ecf0f1",
    link: "rgba(255, 255, 255, 0.8)"
}

/* Typography */
const typography = {
    fontFamily: "Roboto, sans-serif",
    bodyFontSize: "16px"
}

/* Container */
const container = {
    containerWidth: "1324px",
    containerWidthMd: "800px",
    containerWidthSm: "600px"
}

/* Theme object */
export const theme = {
    container: {
        ...container
    },
    typography: {
        ...typography
    },
    colors: {
        ...colors
    },
    cassette: {
        cassette_width: '600px',
        screw_background_color: '#b2bec3',
        screw_color: '#636e72',
        side_font_size: "30px",
        cassette_inner_color: '#e17055'
    }
}

/* Development only*/
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log(theme)
}