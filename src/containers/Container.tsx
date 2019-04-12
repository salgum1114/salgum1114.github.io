import React, { Component } from 'react';
import { Layout } from 'antd';
import { RouteChildrenProps } from 'react-router';
import MediaQuery from 'react-mqls';

import Title from './Title';
import { CSSMapper, IRoute } from '../types/utils';
import Events from '../utils/Events';
import Menus from './Menus';
import Dialog from '../components/Dialog';

const styles: CSSMapper = {
    theme: {
        backgroundColor: '#fff',
    },
    header: {
        padding: 0,
    },
    content: {
        overflow: 'auto',
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
                <Layout.Header style={{ ...styles.theme, ...styles.header }}>
                    <Title />
                </Layout.Header>
                <Layout.Content style={styles.content}>
                    {children}
                </Layout.Content>
                <MediaQuery
                    queries={[
                        {
                            query: '(min-width: 576px)',
                            component: (
                                <Dialog
                                    visible={collapsed}
                                    placement="left"
                                    closable={false}
                                    width={300}
                                    contentStyle={{ padding: 0 }}
                                    titleStyle={{ display: 'none' }}
                                    footerStyle={{ display: 'none' }}
                                >
                                    <Menus routes={routes} pathname={this.props.location.pathname} />
                                </Dialog>
                            ),
                        },
                        {
                            query: '(max-width: 575px)',
                            component: (
                                <Dialog
                                    visible={collapsed}
                                    placement="left"
                                    closable={false}
                                    width="75%"
                                    contentStyle={{ padding: 0 }}
                                    titleStyle={{ display: 'none' }}
                                    footerStyle={{ display: 'none' }}
                                >
                                    <Menus routes={routes} pathname={this.props.location.pathname} />
                                </Dialog>
                            ),
                        }
                    ]}
                />
            </Layout>
        );
    }
}

export default Container;
