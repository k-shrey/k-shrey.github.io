import React from "react";
// import { Route } from "react-router-dom";
import Company from './ResumeComponents/Company';
import Role from "./ResumeComponents/Role";
import resume from '../site-data/resume.json';

export default function Resume() {
    return (
        <>
        {resume.items.map((item, i) => (
            <div key={i} className="flex sm:flex-nowrap flex-wrap m-4 mb-10">
                    <Company {...item} />
                <div className="mt-3 sm:mt-0 pl-2 sm:pl-0 border-sky-500 border-l-[3px] sm:border-0">
                    {item.projects.map((project, i) => (
                        <Role key={i} {...project} />
                    ))}
                </div>
            </div>
        ))}
        </>

    )
}