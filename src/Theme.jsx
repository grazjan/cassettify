/* App Theme settings */
/* *************************************** */


/* Colors */
const colors = {
    bodyBgColor: '#fab1a0',
    primary: "#1abc9c",
    secondary: "#2d3436",
    tertiary: "#ecf0f1",
    textColor: "#2f3640",
    link: "rgba(255, 255, 255, 0.8)"
}

/* Typography */
const typography = {
    fontFamily: "Roboto, sans-serif",
    bodyFontSize: "16px",
    headlines: {
        desktop: {
            h1: "48px",
            h2: "38px",
            h3: "34px",
            h4: "28px",
            h5: "22px",
            h6: "18px"
        },
        mobile: {
            h1: "36px",
            h2: "28px",
            h3: "26px",
            h4: "24px",
            h5: "18px",
            h6: "16px"
        }
    }
}

/* Container */
const container = {
    containerWidth: "1324px",
    containerWidthMd: "800px",
    containerWidthSm: "600px"
}

/* Breakpoints */
const breakpoint = {
    mobile: 767,
    tablet: 1023,
    desktop: 1920,
}

/* Shadows */
const shadow = {
    shadowPrimary: "5px 5px 14px -3px #000000",
    shadowSecondary: "5px 5px 7px -3px rgba(0,0,0,0.8)"
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
    breakpoint: {
        ...breakpoint
    },
    shadow: {
        ...shadow
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