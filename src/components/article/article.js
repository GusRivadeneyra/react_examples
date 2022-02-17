import React from "react";

import { Header } from './header'
import { Paragraph } from "./paragraph";

export function Article(props) {
    const post = props.content
    return (
        <>
            <Header size="large">
                {post.title}
            </Header>
            <Header size="medium">
                {post.subtitle}
            </Header>
            <Header size="small">
                {post.author.media}
            </Header>
            <Header >
                {post.author.person}
            </Header>
            <div>{post.author.person}</div>
            <Paragraph  text={post.developing} />
        </>
    )
}
