import React from "react";
import { ThemeContext, themes } from "./ThemeContext";
import getThemeStore from "../../stores/themeStore";
import { ThemeProviderProps } from "../../types/ThemeContextType";
import { observer } from "mobx-react-lite";

export const ThemeProvider : React.FC<ThemeProviderProps> = observer(({children}) => {
    const themeState = getThemeStore().theme.get();
    const toggleTheme = () =>  getThemeStore().toggleTheme();
    const theme = (themeState === "dark" ? themes.dark : themes.light);
    return (
        <ThemeContext.Provider value = {{theme , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
})