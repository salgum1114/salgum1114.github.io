import App, { Container } from 'next/app';
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Helmet from 'react-helmet';
import moment from 'moment';

import Layout from '../components/Layout';
import '../styles/index.less';

moment.locale('ko');

Router.events.on('routeChangeStart', (url) => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class RootApp extends App {
    state = {
        // metadatas: {},
        authors: {},
        tags: {},
        posts: {},
    }

    async componentDidMount() {
        // const metadatasModule = await import('../_metadata/metadatas.json');
        const authorsModule = await import('../_metadata/authors.json');
        const tagsModule = await import('../_metadata/tags.json');
        const postsModule = await import('../_metadata/posts.json');
        this.setState({
            // metadatas: metadatasModule.default,
            authors: authorsModule.default,
            tags: tagsModule.default,
            posts: postsModule.default,
        });
    }

    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <Helmet title="Dev.log">
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-97485289-2" />
                    <script>
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag("js", new Date());
                            gtag("config", 'UA-97485289-2');
                        `}
                    </script>
                </Helmet>
                <Layout {...other} {...this.state}>
                    <Component {...other} {...this.state} />
                </Layout>
            </Container>
        );
    }
}