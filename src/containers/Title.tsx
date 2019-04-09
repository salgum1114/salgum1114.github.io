import React, { Component } from 'react';
import { Icon } from 'antd';

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
    },
};

interface IState {
    collapsed: boolean;
}

class Title extends Component<{}, IState> {
    state: IState = {
        collapsed: false,
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
        const { collapsed } = this.state;
        return (
            <div style={styles.container}>
                <div style={styles.menuCollapse}>
                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.handleCollapse} />
                </div>
            </div>
        );
    }
}

export default Title;
