import React, { Component } from 'react';

import ErrorPage from '../components/ErrorPage';
import Layout from '../components/Layout';

export default class RootError extends Component {
    render() {
        const { statusCode } = this.props;
        return (
            <Layout>
                <ErrorPage statusCode={statusCode} />
            </Layout>
        );
    }
}
