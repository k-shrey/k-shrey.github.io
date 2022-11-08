import React from "react";
// import { Route } from "react-router-dom";
import Company from './ResumeComponents/Company';
import Role from "./ResumeComponents/Role";
import resume from '../site-data/resume.json';
import { ThemeContext } from "../themeContext";

export default function Resume() {
    const themeContext = React.useContext(ThemeContext);

    return (
        <>
            {resume.items.map((item, i) => (
                <div key={i} className="sm:mt-6 flex sm:flex-nowrap flex-wrap m-4 mb-10 last:mb-0">
                    <Company {...item} />
                    <div className="mt-3 sm:mt-0 pl-2 sm:pl-0 border-l-[3px] sm:border-0"
                        style={{ borderColor: themeContext?.theme.colors.accentColor }}
                    >
                        {item.projects.map((project, i) => (
                            <Role key={i} {...project} />
                        ))}
                    </div>
                </div>
            ))}
        </>

    )
}