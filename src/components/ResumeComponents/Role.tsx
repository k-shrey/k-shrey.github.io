import React from "react";

import { ProjectType } from "../../types/WorkExpTypes";
import Badge from "./Badge";
import { ThemeContext } from "../../themeContext";
// import "../../static/role.css";


export default function Role({ title, description, startDate, endDate, which, techStack }:
    ProjectType) {
    const themeContext = React.useContext(ThemeContext);

    return (
        <div className="ml-1 sm:max-w-[350px] last:-mb-7">
            <div className="text-lg font-semibold">
                {title.text}
            </div>
            <div className="text-xs mt-1">
                {startDate} ~ {endDate.length > 0 ? endDate : "present"}
            </div>
            <div className="text-sm sm:text-base font-light mt-1">
                {description}
            </div>
            <ul className="list-disc mt-2" style={{ color: themeContext?.theme.colors.accentColor}}>
                {which && which.map((task, i) => (
                    <li key={i} className="text-sm">
                        <div style={{
                            color: themeContext?.theme.colors.primary
                        }}>
                            {task}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex flex-wrap mb-8 gap-y-2">
                {techStack?.map((tech, i) => (
                    <Badge key={i}>
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
    )
}