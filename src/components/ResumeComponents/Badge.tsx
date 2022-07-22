import React from "react";



export default function Badge({ children }: { children: React.ReactNode }) {

    return (
        <div className="inline rounded-full text-[10px] bg-gray-100 px-2 py-1 ml-2">
            {children}
        </div>
    )
}