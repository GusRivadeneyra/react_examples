import { findByLabelText } from "@testing-library/react";
import React from "react";
import { Article } from "./article";

export function Paragraph({ text, textSize = 18, children,}) {
    return (
        <div style={{
            padding: 24,
            margin: 16,
            fontSize: textSize,
        }}>
            <p style={{
                fontSize: '18px',
            }}>{children ? children : text}</p>
        </div>
    )
}
