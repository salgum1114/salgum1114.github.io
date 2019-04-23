import React, { Component } from 'react';
import { Layout } from 'antd';
import { RouteChildrenProps } from 'react-router';

import Title from './Title';
import { CSSMapper, IRoute } from '../types/utils';
import Search from './Search';

const styles: CSSMapper = {
    theme: {
        backgroundColor: '#fff',
    },
    header: {
        padding: 0,
        boxShadow: '0px 0px 10px -2px rgba(0, 0, 0, 0.75)',
        zIndex: 1000,
    },
    content: {
        overflow: 'auto',
    },
}

interface IProps extends RouteChildrenProps {
    routes: IRoute[];
}

class Container extends Component<IProps> {
    componentDidMount() {
        this.initBrowserRefresh();
    }

    initBrowserRefresh = () => {
        window.onbeforeunload = () => {
            if (this.props.location && this.props.location.state) {
                this.props.history.push({
                    state: {},
                });
            }
        };
    }

    render() {
        const { children, location, history, match } = this.props;
        return (
            <Layout style={{ height: '100%' }}>
                <Layout.Header style={{ ...styles.theme, ...styles.header }}>
                    <Title location={location} history={history} match={match} />
                </Layout.Header>
                <Layout.Content style={styles.content}>
                    {children}
                </Layout.Content>
                <Search location={location} history={history} match={match} />
            </Layout>
        );
    }
}

export default Container;
