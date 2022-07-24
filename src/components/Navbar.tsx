import React from "react";
import { Switch } from "@nextui-org/react";

import { ThemeContext } from "../themeContext";
import { SunIcon } from '../assets/SunIcon';
import { MoonIcon } from '../assets/MoonIcon';
import "../static/nav.css";

export default function Navbar() {
    const themeContext = React.useContext(ThemeContext);
    const accentColor = themeContext?.theme.colors.accentColor;
    const primaryColor = themeContext?.theme.colors.primary;

    return (
        <div className="block flex p-4">
            <div className="grow">
                <h1 className="leading-none sm:leading-normal"
                    style={{
                        backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 60%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                    My Portfolio Website
                </h1>
            </div>
            <div className="ml-3 p-3 my-auto">
                <Switch
                    checked={themeContext?.theme.type === "dark"}
                    size="lg"
                    css={{
                        // height: '32px',
                        // padding: '0',
                        // '& span': { backgroundColor: '$white' },
                        // // '& div': { height: '32px' },
                        '--nextui--switchColor': themeContext?.theme.colors.secondaryContrast,
                        '--nextui--switchColorHover': themeContext?.theme.colors.secondaryContrast,
                    }}
                    iconOn={<MoonIcon filled fill={themeContext?.theme.colors.secondary} />}
                    iconOff={<SunIcon filled fill={themeContext?.theme.colors.primary} />}
                    onChange={() => { themeContext?.toggleTheme() }}
                    preventDefault
                    animated
                />
            </div>
        </div>
    )
}