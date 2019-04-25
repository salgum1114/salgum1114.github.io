import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';

export default class RootApp extends App {
    state = {
        metadatas: {},
        authors: {},
        tags: {},
        posts: {},
    }

    async componentDidMount() {
        const metadatasModule = await import('../_metadata/metadatas.json');
        const authorsModule = await import('../_metadata/authors.json');
        const tagsModule = await import('../_metadata/tags.json');
        const postsModule = await import('../_metadata/posts.json');
        this.setState({
            metadatas: metadatasModule.default,
            authors: authorsModule.default,
            tags: tagsModule.default,
            posts: postsModule.default,
        });
    }

    render() {
        const { Component, ...other } = this.props;
        const { metadatas, authors, tags, posts } = this.state;
        return (
            <Container>
                <Head>
                    <title>Dev.log</title>
                </Head>
                <Layout metadatas={metadatas} authors={authors} tags={tags} posts={posts}>
                    <Component {...other} metadatas={metadatas} authors={authors} tags={tags} posts={posts} />
                </Layout>
            </Container>
        );
    }
}