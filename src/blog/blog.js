import React from "react";

import { Article } from '../components/article/article';
import { posts }  from "../data/entries";

export const Blog = () => {
    return (
        <div>
            <div style={{
                gap: '16px',
            }}>
                {posts.map((_post, idx) => {
                    return (
                        <div id={idx}>
                            <Article content={_post} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}