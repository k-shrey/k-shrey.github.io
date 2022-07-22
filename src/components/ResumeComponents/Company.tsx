import React from "react";

import { CompanyType } from "../../types/WorkExpTypes";

export default function Company({ name, position, startDate, endDate, description }:
    Omit<CompanyType, 'projects'>) {
    return (
        <div className="sm:max-w-[250px] w-[90vw] break-normal">
            <div className="sticky top-0">
                <div className="text-lg font-semibold">
                    {name}
                </div>
                <div className="text-sm mt-2">
                    {startDate} ~ {endDate.length > 0 ? endDate : "present"}
                </div>
                <div className="">
                    {position}
                </div>
                <div className="text-sm sm:text-base font-light mt-2">
                    {description}
                </div>
            </div>
        </div>

    )
}