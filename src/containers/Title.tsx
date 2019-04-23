import React, { Component } from 'react';
import { Icon } from 'antd';
import { connect } from 'react-redux';
import classnames from 'classnames';
import throttle from 'lodash/throttle';

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
    private timeoutId: NodeJS.Timeout;

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

    onScroll = throttle((e: any) => {
        if (e.target.scrollTop >= 64) {
            if (this.props.location.pathname === '/') {
                return;
            }
            const content = document.querySelector('.blog-backtop');
            if (content) {
                content.classList.add('visible');
            }
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                const content = document.querySelector('.blog-backtop');
                if (content) {
                    content.classList.remove('visible');
                }
            }, 1500);
            if (!this.state.visible) {
                this.setState({
                    visible: true,
                });
            }
        } else {
            if (this.state.visible) {
                const content = document.querySelector('.blog-backtop');
                if (content) {
                    content.classList.remove('visible');
                }
                this.setState({
                    visible: false,
                });
            }
        }
    }, 200)

    handleSearch = () => {
        Events.emit('searchcollapse');
    }

    handlePosts = () => {
        const { history, location } = this.props;
        this.setState({
            visible: false,
        });
        history.push('/');
        location.pathname = '/';
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
                <div style={styles.title}>
                    <h2 className={classname}>
                        {visible && post.title}
                    </h2>
                    {!visible && (
                        <a href="https://github.com/salgum1114" target="_blank">
                            <Icon style={{ fontSize: '1.25rem' }} type="github" />
                        </a>
                    )}
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
