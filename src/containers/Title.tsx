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
        height: 40,
        width: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginLeft: 16,
        cursor: 'pointer',
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
                <Link style={styles.menuCollapse} to="/posts">
                    <Icon style={{ fontSize: '1.25rem' }} type="bars" />
                </Link>
                {/* <div style={styles.menuCollapse} onClick={this.handleCollapse}>
                    <Icon style={{ fontSize: '1.25rem' }} type="bars" />
                </div> */}
            </div>
        );
    }
}

export default Title;
