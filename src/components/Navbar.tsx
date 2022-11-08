import React from "react";
import { Switch } from "@nextui-org/react";

import { ThemeContext } from "../themeContext";
import { SunIcon } from '../assets/SunIcon';
import { MoonIcon } from '../assets/MoonIcon';
import "../static/nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const themeContext = React.useContext(ThemeContext);
    const accentColor = themeContext?.theme.colors.accentColor;
    const primaryColor = themeContext?.theme.colors.primary;

    return (
        <>
            <div className="block flex p-4 pb-3">
                <div className="grow">
                    <h1 className="leading-none sm:leading-normal"
                        style={{
                            backgroundImage: `linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 60%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                        Shrey's Portfolio Website
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
            <div className="ml-4 flex flex-wrap gap-3 items-center max-w-[350px]">
                <a href="https://linkedin.com/in/shrey-k" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
                <a href="https://github.com/k-shrey" target="_blank" className="">
                    <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
                <a href="mailto:shreykxyz@gmail.com" target="_blank" className="">
                    <FontAwesomeIcon icon={faEnvelope} size="xl" />
                </a>
                <div className="whitespace-nowrap rounded-full bg-[#0670F3] pl-1 pt-1 pr-3 pb-2">
                    <a href="https://drive.google.com/uc?id=1l4xxVM9FsqGU5FYt13GX2qdqJYCAA-P7&export=download" target="_blank" className="ml-2" style={{
                        color: themeContext?.theme.colors.secondary
                    }}>
                        Download PDF résumé <FontAwesomeIcon icon={faDownload} size="lg" />
                    </a>
                </div>
            </div>
        </>
    )
}