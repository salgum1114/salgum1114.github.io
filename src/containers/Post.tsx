import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Icon } from 'antd';
import { Redirect } from 'react-router';
import moment from 'moment';

import { IReducer } from '../reducers';
import { IPost } from '../types/post';
import { CSSMapper } from '../types/utils';

interface IProps {
    id: string;
    pathname: string;
    posts: Record<string, IPost>;
}

interface IState {
    post: IPost;
    error: boolean;
}

const styles: CSSMapper = {
    container: { maxWidth: 768, flex: 1 },
    title: { fontSize: '2.5em', lineHeight: '3.2rem', wordBreak: 'break-word' },
    createdTime: { fontSize: '1.125em', color: '#868e96', margin: '16px 0' },
    userInfo: { margin: '32px 0 32px 0' },
    tags: { display: 'flex', alignItems: 'center', margin: '64px 0 32px 0' },
    tagsIcon: { fontSize: 18, marginRight: 16 },
};

class Post extends Component<IProps, IState> {
    state: IState = {
        post: {},
        error: false,
    }

    componentDidMount() {
        const { pathname, posts } = this.props;
        const post = posts['./_posts/css/2019-04-09-css.md'];
        if (post) {
            this.setState({
                post,
            });
        } else {
            this.setState({
                post: null,
                error: true,
            });
        }
    }

    render() {
        const { pathname } = this.props;
        const { error, post } = this.state;
        if (!post && error) {
            return <Redirect to={{ pathname, state: { status: 404 } }} />
        }
        return (
            <div className="container">
                <div style={styles.container}>
                    <h1 style={styles.title}>{post.title}</h1>
                    <div style={styles.createdTime}>{moment(post.date).fromNow()}</div>
                    <Divider />
                    <div id="editor" />
                    <div style={styles.tags}>
                        <Icon type="tags" style={styles.tagsIcon} />
                        <Tags tags={post.tags} />
                    </div>
                    <Divider />
                    <div style={styles.userInfo}>
                        <UserInfo user={post.user || { username: 'Admin', userId: 'admin', description: '신규 프로젝트팀에서 업무를 하고 있습니다. 프로토타이핑 및 인터렉티브한 UI 제작 작업을을 좋아합니다. 최근에는 리엑트 컴포넌트 기반의 디자인 시스템에 관심이 많습니다.' }} />
                        {/* <UserInfo user={post.user} /> */}
                    </div>
                    <Divider />
                    <Comments post={post} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: IReducer) => ({
    posts: state.posts.posts,
});

export default connect(mapStateToProps)(Post);