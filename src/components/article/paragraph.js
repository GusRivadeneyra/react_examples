import React from "react";


export function Paragraph({ text }) {
    
    return (
        <div style={{
            padding: 24,
            margin: 16,
            fontSize: 18
        }}>
            <p>{text}</p>
        </div>
    )
}
