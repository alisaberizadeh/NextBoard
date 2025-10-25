"use client";

import { createContext, useState, useLayoutEffect, ReactNode } from "react";

type Theme = 
    | "light" | "dark" | "cupcake" | "bumblebee" | "emerald" | "corporate" 
    | "synthwave" | "retro" | "cyberpunk" | "valentine" | "halloween" 
    | "garden" | "forest" | "aqua" | "lofi" | "pastel" | "fantasy" 
    | "wireframe" | "black" | "luxury" | "dracula" | "cmyk" 
    | "autumn" | "business" | "acid" | "lemonade" | "night" 
    | "coffee" | "winter" | "dim" | "nord" | "sunset" 
    | "caramellatte" | "abyss" | "silk";

const themes: Theme[] = [
    "light","dark","cupcake","bumblebee","emerald","corporate","synthwave",
    "retro","cyberpunk","valentine","halloween","garden","forest","aqua",
    "lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk",
    "autumn","business","acid","lemonade","night","coffee","winter","dim",
    "nord","sunset","caramellatte","abyss","silk"
];

interface ThemeContextType {
    theme: Theme;
    toggleTheme: (value: string) => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("light");

    useLayoutEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme && themes.includes(storedTheme as Theme)) {
            setTheme(storedTheme as Theme);
            document.documentElement.setAttribute("data-theme", storedTheme);
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, []);

    const toggleTheme = (value: string) => {
        if (themes.includes(value as Theme)) {
            setTheme(value as Theme);
            localStorage.setItem("theme", value);
            document.documentElement.setAttribute("data-theme", value);
        } else {
            console.log(`Invalid theme: ${value}`);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
