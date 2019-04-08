import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

class Container extends Component {
    render() {
        const { children } = this.props;
        return (
            <Layout style={{ height: '100%' }}>
                <Layout.Sider>
                    <Menu>
                        <Menu.Item key="home">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">About</Link>
                        </Menu.Item>
                        <Menu.Item key="tag">
                            <Link to="/Tag">Tag</Link>
                        </Menu.Item>
                    </Menu>
                </Layout.Sider>
                <Layout.Content>
                    {children}
                </Layout.Content>
            </Layout>
        );
    }
}

export default Container;
