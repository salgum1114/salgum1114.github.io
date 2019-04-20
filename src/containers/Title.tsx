import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';

import { CSSMapper } from '../types/utils';
import Events from '../utils/Events';
import { RouteChildrenProps } from 'react-router';
import { IReducer } from '../reducers';
import { IPost } from '../types/post';

interface IProps extends RouteChildrenProps {
    post?: IPost;
}

interface IState {
    visible?: boolean;
}

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
    title: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        color: '#000',
        fontWeight: 500,
        fontSize: '1.25rem',
        whiteSpace: 'nowrap',
    },
    search: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 16,
    },
};

class Title extends Component<IProps, IState> {
    state = {
        visible: false,
    }

    componentDidMount() {
        const content = document.querySelector('.ant-layout-content');
        if (content) {
            this.attactEvents();
        }
    }

    componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.post !== this.props.post) {
            this.setState({
                visible: false,
            });
        }
    }

    attactEvents = () => {
        const content = document.querySelector('.ant-layout-content');
        if (content) {
            content.addEventListener('scroll', this.onScroll);
        }
    }

    detachEvents = () => {
        const content = document.querySelector('.ant-layout-content');
        if (content) {
            content.removeEventListener('scroll', this.onScroll);
        }
    }

    onScroll = (e: any) => {
        if (e.target.scrollTop >= 64) {
            if (this.props.location.pathname === '/posts') {
                return;
            }
            if (!this.state.visible) {
                this.setState({
                    visible: true,
                });
            }
        } else {
            if (this.state.visible) {
                this.setState({
                    visible: false,
                });
            }
        }
    }

    handleSearch = () => {
        Events.emit('searchcollapse');
    }

    handlePosts = () => {
        const { history, location } = this.props;
        this.setState({
            visible: false,
        });
        history.push('/posts');
        location.pathname = '/posts';
    }

    render() {
        const { post } = this.props;
        const { visible } = this.state;
        const classname = classnames('container-title', {
            visible,
        });
        return (
            <div style={styles.container}>
                <div style={styles.menuCollapse}>
                    <Icon style={{ fontSize: '1.25rem' }} type="bars" onClick={this.handlePosts} />
                </div>
                <div className={classname} style={styles.title}>
                    {post.title}
                </div>
                <div style={styles.search}>
                    <Icon style={{ fontSize: '1.25rem' }} type="search" onClick={this.handleSearch} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IReducer) => ({
    post: state.posts.post,
});

export default connect(mapStateToProps)(Title);
