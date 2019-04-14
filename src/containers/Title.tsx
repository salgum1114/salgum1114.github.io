import React, { Component } from 'react';
import { Icon } from 'antd';

import { CSSMapper } from '../types/utils';
import Events from '../utils/Events';
import { RouteChildrenProps } from 'react-router';

const styles: CSSMapper = {
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    menuCollapse: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: 16,
        cursor: 'pointer',
    },
    search: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 16,
    },
};

class Title extends Component<RouteChildrenProps> {
    handleSearch = () => {
        Events.emit('searchcollapse');
    }

    handlePosts = () => {
        const { history, location } = this.props;
        history.push('/posts');
        location.pathname = '/posts';
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.menuCollapse}>
                    <Icon style={{ fontSize: '1.25rem' }} type="bars" onClick={this.handlePosts} />
                </div>
                <div style={styles.search}>
                    <Icon style={{ fontSize: '1.25rem' }} type="search" onClick={this.handleSearch} />
                </div>
            </div>
        );
    }
}

export default Title;
