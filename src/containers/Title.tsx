import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

import { CSSMapper } from '../types/utils';
import Events from '../utils/Events';

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

interface IState {
    collapsed: boolean;
}

class Title extends Component<{}, IState> {
    state: IState = {
        collapsed: true,
    }

    componentDidMount() {
        Events.on('menucollapse', () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        });
    }

    handleCollapse = () => {
        Events.emit('menucollapse');
    }

    render() {
        return (
            <div style={styles.container}>
                <div style={styles.menuCollapse}>
                    <Link to="/posts">
                        <Icon style={{ fontSize: '1.25rem' }} type="bars" />
                    </Link>
                </div>
                <div style={styles.search}>
                    <Icon style={{ fontSize: '1.25rem' }} type="search" onClick={this.handleCollapse} />
                </div>
            </div>
        );
    }
}

export default Title;
