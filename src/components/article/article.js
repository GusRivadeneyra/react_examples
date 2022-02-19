import React from "react";

import { Header } from './header'
// import { Paragraph } from "./paragraph";

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
            <Header size="small" >
                {post.author.media}
            </Header>
            <Header >
                {post.author.person}
            </Header>

            {/* <Paragraph text={post.developing} textSize={32}/>
            <Paragraph text={post.developing2} textSize={32} />
            <Paragraph text={post.developing3} textSize={32}/>
            <Paragraph text={post.developing4} textSize={32}/>
            <Paragraph text={post.developing5} textSize={32}/> */}
            
               
            {post.paragraphs.map((pargp) => pargp)}

        </>
    )
}
