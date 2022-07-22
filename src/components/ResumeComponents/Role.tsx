import React from "react";

import { ProjectType } from "../../types/WorkExpTypes";
import Badge from "./Badge";

export default function Role({ title, description, startDate, endDate, which, techStack}:
    ProjectType) {

    return (
        <div className="ml-2 max-w-[90%] sm:max-w-[350px]">
            <div className="text-lg font-semibold">
                {title.text}
            </div>
            <div className="text-xs mt-1">
                {startDate} ~ {endDate.length > 0 ? endDate : "present"}
            </div>
            <div className="text-sm sm:text-base font-light mt-0">
                {description}
            </div>
            <ul className="list-disc text-sky-500">
                {which.map((task, i) => (
                    <li key={i} className="text-sm">
                        <div className="text-black">
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