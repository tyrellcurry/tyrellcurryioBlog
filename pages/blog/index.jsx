import Head from "next/head"
import { Component } from 'react'
import { attributes, react as SecondBlog } from '../../_posts/blog/second-blog.md';
import Image from 'next/image';

export default class Home extends Component {
    render() {
        let { title, thumbnail } = attributes;
        return (
        <>
            <article>
            <h1>{title}</h1>
            <Image src={`/${thumbnail}`}
                alt="Picture of the author"
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
                />
            <SecondBlog />
            </article>
        </>
        )
    }
}