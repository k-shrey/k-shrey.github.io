import React from "react";
import { ThemeContext } from "../../themeContext";


export default function Badge({ children }: { children: React.ReactNode }) {
    const themeContext = React.useContext(ThemeContext);
    // const bgColor = themeContext?.theme.colors.badgeSecondary;

    return (
        <div className="inline rounded-full text-[10px] bg-gray-100 px-2 py-1 first:ml-0 ml-2"
             style={{
                backgroundColor: themeContext?.theme.colors.badgeSecondary
             }}>
            {children}
        </div>
    )
}