import React, { createContext, useState } from "react";
import { darkTheme, lightTheme, getDesignTokens } from "../styles/Themes";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export const SettingsContext = createContext({});

const listaTemas = {
  dark: darkTheme,
  light: lightTheme,
};

export default function SettingsProvider({ children }) {
  const [themeOptions, setThemeOptions] = useState(lightTheme); //Estado para armazenar o tema default da aplicação, caso não exista algum salvo no localStorage

  //Função para alterar o tema
  function changeThemeOptions(newTheme) {
    if (themeOptions.palette.mode == "light") {
      setThemeOptions(darkTheme);
    } else {
      setThemeOptions(lightTheme);
    }
  }

  return (
    <SettingsContext.Provider value={{ changeThemeOptions }}>
      <ThemeProvider theme={themeOptions}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </SettingsContext.Provider>
  );
}
