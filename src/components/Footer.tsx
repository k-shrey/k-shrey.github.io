import React from 'react';
import { ThemeContext } from '../themeContext';

export default function Footer() {
    const themeContext = React.useContext(ThemeContext);

    return (
        <div className="flex p-3 border-t-2"
            style={{ borderColor: themeContext?.theme.colors.accentColor }}
        >
            <div className="ml-auto text-xs font-light">
                Copyright © 2022 k-shrey. All Rights Reserved.
                Powered by React.
            </div>
        </div>
    )
}