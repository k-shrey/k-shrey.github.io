import React from 'react';
import useLocalStorage from 'use-local-storage';
import { darkTheme, lightTheme, ThemeType } from './assets/CustomTheme';

const ThemeContext = React.createContext<ThemeContextInterface | null>(null);
type ThemeChoice = 'dark' | 'light';
// type ThemeType = typeof darkTheme;

interface ThemeContextInterface {
    theme: ThemeChoice;
    toggleTheme: () => void;
    props: ThemeType;
}

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // get theme preference from browser
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage<ThemeChoice>('theme',
        defaultDark ? 'dark' : 'light');
    
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        
    };

    const props = myLightTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, props }}>
            {children}
        </ThemeContext.Provider>
    )
};

export { ThemeContext, ThemeProvider };

export type { ThemeContextInterface, ThemeChoice };

