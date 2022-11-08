import React from "react";

import { CompanyType } from "../../types/WorkExpTypes";
import { MapIcon } from "../../assets/MapIcon";
import { ThemeContext } from "../../themeContext";

export default function Company({ name, position, startDate, endDate, description, location }:
    Omit<CompanyType, 'projects'>) {
    const themeContext = React.useContext(ThemeContext);
    return (
        <div className="w-[250px] break-normal">
            <div className="sticky top-4">
                <div className="text-lg font-semibold">
                    {name}
                </div>
                <div className="flex flex-row mt-1 text-sm italic">
                    <span className="inline-flex">
                        <MapIcon filled fill={themeContext?.theme.colors.accentColor} size={20} />
                    </span>
                    <div className="inline-flex ml-1">
                        {location}
                    </div>
                </div>
                <div className="mt-1">
                    {position}
                </div>
                <div className="text-sm">
                    {startDate} ~ {endDate.length > 0 ? endDate : "present"}
                </div>
                <div className="text-sm sm:text-base font-light mt-2">
                    {description}
                </div>
            </div>
        </div>

    )
}