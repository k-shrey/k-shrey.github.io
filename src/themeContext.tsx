import React from 'react';
import useLocalStorage from 'use-local-storage';
import { darkTheme, lightTheme, ThemeType } from './assets/CustomTheme';

const ThemeContext = React.createContext<ThemeContextInterface | null>(null);
interface ThemeContextInterface {
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // get theme preference from browser
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage<ThemeType>('theme',
        defaultDark ? darkTheme : lightTheme);
    const toggleTheme = () => {
        setTheme(theme?.type === 'dark' ? lightTheme : darkTheme)
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export { ThemeContext, ThemeProvider };

export type { ThemeContextInterface };

