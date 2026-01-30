import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1C6EAB",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#DD3628",
    },
    warning: {
      main: "#F79A4A",
    },

    success: {
      main: "#81C241",
    },
    info: {
      main: "#1C6EAB",
    },
  },
  typography: {
    fontFamily: "Myriad Pro, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "clamp(1.75rem, 0.8571rem + 2.381vw, 3rem)",
    },
    h2: {
      fontWeight: 700,
      fontSize: "clamp(1.5rem, 1.1429rem + 0.9524vw, 2rem)",
    },
    h3: {
      fontWeight: 700,
      fontSize: "clamp(1.25rem, 1.0714rem + 0.4762vw, 1.5rem)",
    },
    h4: {
      fontWeight: 700,
      fontSize: "clamp(1.125rem, 1.0357rem + 0.2381vw, 1.25rem)",
    },
    h5: {
      fontWeight: 700,
      fontSize: "clamp(1rem, 0.9107rem + 0.2381vw, 1.125rem)",
    },
    h6: {
      fontWeight: 700,
      fontSize: "clamp(0.875rem, 0.7857rem + 0.2381vw, 1rem)",
    },
    body1: {
      fontWeight: 400,
      fontSize: "clamp(1rem, 0.9107rem + 0.2381vw, 1.125rem)",
    },
    body2: {
      fontWeight: 600,
      fontSize: "clamp(1rem, 0.9107rem + 0.2381vw, 1.125rem)",
      lineHeight: "150%",
    },
    caption: {
      fontSize: "clamp(0.625rem, 0.5357rem + 0.2381vw, 0.75rem)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          fontSize: "14px",
          fontStyle: "normal",
          lineHeight: "24px",
          letterSpacing: "1.25px",

          gap: "var(--Spacing-System-Spacing-XS, 8px)",
          padding: "12px 24px",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          ":last-of-type": {
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          margin: "16px 0px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: "0px",
        },
      },
    },
  },
});

export default theme;
