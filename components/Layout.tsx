import React, { Component } from 'react';
import { Layout as AntLayout } from 'antd';

import Title from './Title';
import Search from './Search';
import { CSSMapper } from '../types/utils';

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

class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <AntLayout style={{ height: '100%' }}>
                <AntLayout.Header style={{ ...styles.theme, ...styles.header }}>
                    <Title />
                </AntLayout.Header>
                <AntLayout.Content style={styles.content}>
                    {children}
                </AntLayout.Content>
                <Search />
            </AntLayout>
        );
    }
}

export default Layout;