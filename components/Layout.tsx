import React, { Component } from 'react';
import { Layout as AntLayout } from 'antd';
import { RouterProps } from 'next/router';

import Title from './Title';
import Search from './Search';
import { CSSMapper } from '../types/utils';
import { IPost } from '../types/post';
import { ITags } from '../types/tag';
import { IAuthor } from '../types/author';

interface IProps {
    // metadatas?: Record<string, IPost>,
    authors?: Record<string, IAuthor>,
    tags?: ITags,
    posts?: Record<string, IPost>,
    router?: RouterProps;
}

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

class Layout extends Component<IProps> {
    render() {
        const { children, tags, router } = this.props;
        return (
            <AntLayout style={{ height: '100%' }}>
                <AntLayout.Header style={{ ...styles.theme, ...styles.header }}>
                    <Title />
                </AntLayout.Header>
                <AntLayout.Content style={styles.content}>
                    {children}
                </AntLayout.Content>
                <Search router={router} tags={tags} />
            </AntLayout>
        );
    }
}

export default Layout;