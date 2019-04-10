import React, { Component } from 'react';
import { Layout } from 'antd';
import { RouteChildrenProps } from 'react-router';

import Title from './Title';
import { CSSMapper, IRoute } from '../types/utils';
import Events from '../utils/Events';
import Menus from './Menus';

const styles: CSSMapper = {
    theme: {
        backgroundColor: '#fff',
    },
    header: {
        padding: 0,
    },
}

interface IProps extends RouteChildrenProps {
    routes: IRoute[];
}

interface IState {
    collapsed: boolean;
}

class Container extends Component<IProps, IState> {
    state: IState = {
        collapsed: false,
    }

    componentDidMount() {
        this.initBrowserRefresh();
        Events.on('menucollapse', () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        });
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
        const { children, routes } = this.props;
        const { collapsed } = this.state;
        return (
            <Layout style={{ height: '100%' }}>
                <Layout.Sider style={styles.theme} width={collapsed ? 0 : 260}>
                    <Menus routes={routes} pathname={this.props.location.pathname} />
                </Layout.Sider>
                <Layout.Content>
                    <Layout style={{ height: '100%' }}>
                        <Layout.Header style={{ ...styles.theme, ...styles.header }}>
                            <Title />
                        </Layout.Header>
                        <Layout.Content>
                            {children}
                        </Layout.Content>
                    </Layout>
                </Layout.Content>
            </Layout>
        );
    }
}

export default Container;
