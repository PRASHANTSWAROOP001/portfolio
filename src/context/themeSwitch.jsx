import { createContext, useContext } from "react";

const themeContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {},
})

export const ThemeProvider = ({children, value}) => {
    return(
        <themeContext.Provider value={value}>
        {children}
        </themeContext.Provider>
    )
}

export default function useTheme(){
    return useContext(themeContext);
}