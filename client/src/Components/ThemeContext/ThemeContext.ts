import { createContext, useContext } from "react";

export const themes  = {
    dark : {
        fontColor: "#FFFFFF", 
        backGroundColor : "#31363F",
        borderColor: "#FFFFFF",
        navigationColor : "#FFFFFF",
        fontBlackColor : "#000000"

    },

    light : {
        fontColor: "#77E4C8",
        backGroundColor : "#FFFFFF",
        navigationColor: "#77E4C8",
        borderColor: "#77E4C8",
        fontBlackColor : "#000000"
    }
    
}


export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme : () => {}
});


export const useTheme = () => {
    const context = useContext(ThemeContext);
    return context;
}