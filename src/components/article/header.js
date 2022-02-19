import React from "react";


export function Header({ size, children }) {
    if (size === 'small') {
        return (
            <h3>
                {children}
            </h3>
        )
    }
    if (size === 'medium') {
        return (
            <h2>
                {children}
            </h2>
        )
    }
    if (size === 'large') {
        return (
            <h1>
                {children}
            </h1>
        )
    }

    return <div>{children}</div>
    
}
