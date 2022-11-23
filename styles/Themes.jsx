import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export const _darkTheme = createTheme({
  body: "#fff",
  textTitleColor: "#000",
  textBodyColor: "#000",
  textSmallColor: "#000",
  fontColor: "#000",
  navbar: "#000",
  hover: "#cccccc",
  background: "#f0f0f0",
  sidebarBackground: "#fff",
  backgroundContainerContent: "#fff",
  contrastText: "#fff",
});

export const _lightTheme = createTheme({
  body: "#fff",
  textTitleColor: "#000",
  textBodyColor: "#000",
  textSmallColor: "#000",
  fontColor: "#000",
  navbar: "#eb3d35",
  hover: "#ffd6d4",
  background: "#fff0f0",
  sidebarBackground: "#fff",
  backgroundContainerContent: "#fff",
  contrastText: "#fff",
});

// export const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: "#fff",
//             secondary: grey[500],
//           },
//         }),
//   },
// });
