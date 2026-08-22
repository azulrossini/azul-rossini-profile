import { createTheme } from "@mui/material/styles";

/**
 * Single shared MUI theme for the whole app.
 * Previously each section created its own `createTheme()` instance,
 * which meant four separate themes doing the same thing. Centralizing
 * it here means one source of truth and one place to tweak the palette.
 */
export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "transparent",
      paper: "rgba(15, 23, 42, 0.96)",
    },
  },
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"SF Pro Text"',
      "sans-serif",
    ].join(", "),
  },
});

export default theme;
