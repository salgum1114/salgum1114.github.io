import React, { Component } from 'react';
import { Layout } from 'antd';
import { RouteChildrenProps } from 'react-router';
import MediaQuery from 'react-mqls';

import Title from './Title';
import { CSSMapper, IRoute } from '../types/utils';
import Events from '../utils/Events';
import Dialog from '../components/Dialog';
import Search from './Search';

const styles: CSSMapper = {
    theme: {
        backgroundColor: '#fff',
    },
    header: {
        padding: 0,
        boxShadow: '0px 0px 10px -2px rgba(0, 0, 0, 0.75)',
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
        Events.on('searchcollapse', () => {
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

    handleCancel = () => {
        this.setState({
            collapsed: false,
        });
    }

    render() {
        const { children, location, history, match } = this.props;
        const { collapsed } = this.state;
        return (
            <Layout style={{ height: '100%' }}>
                <Layout.Header style={{ ...styles.theme, ...styles.header }}>
                    <Title location={location} history={history} match={match} />
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
                                    width="50%"
                                    onCancel={this.handleCancel}
                                    contentStyle={{ padding: 0 }}
                                    titleStyle={{ backgroundColor: '#fff', width: '100%'  }}
                                    footerStyle={{ display: 'none' }}
                                >
                                    <Search onCancel={this.handleCancel} location={location} history={history} match={match} />
                                </Dialog>
                            ),
                        },
                        {
                            query: '(max-width: 575px)',
                            component: (
                                <Dialog
                                    visible={collapsed}
                                    width="100%"
                                    closable={false}
                                    onCancel={this.handleCancel}
                                    style={{ maxWidth: '100%' }}
                                    contentStyle={{ padding: 0 }}
                                    titleStyle={{ backgroundColor: '#fff', padding: 0 }}
                                    footerStyle={{ display: 'none' }}
                                >
                                    <Search onCancel={this.handleCancel} location={location} history={history} match={match} />
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
