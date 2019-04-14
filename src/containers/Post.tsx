import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Icon } from 'antd';
import { RouteChildrenProps } from 'react-router';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';

import { IReducer } from '../reducers';
import { IPost } from '../types/post';
import { CSSMapper } from '../types/utils';
import ErrorPage from '../components/ErrorPage';
import Tags from '../components/Tags';
import Comments from '../components/Comments';
import AuthorInfo from '../components/AuthorInfo';
import { IAuthor } from '../types/author';

interface IProps extends RouteChildrenProps {
    id: string;
    posts: Record<string, IPost>;
    authors: Record<string, IAuthor>;
}

interface IState {
    post: IPost;
    author: IAuthor;
    error: boolean;
}

const styles: CSSMapper = {
    container: { display: 'flex', justifyContent: 'center' },
    viewContainer: { maxWidth: 992, flex: 1, width: 'inherit' },
    title: { fontSize: '2.5em', lineHeight: '3.2rem', wordBreak: 'break-word' },
    createdTime: { fontSize: '1.125em', color: '#868e96', margin: '16px 0' },
    authorInfo: { margin: '32px 0 32px 0' },
    tags: { display: 'flex', alignItems: 'center', margin: '64px 0 32px 0' },
    tagsIcon: { fontSize: 18, marginRight: 16 },
};

class Post extends Component<IProps, IState> {
    state: IState = {
        post: {},
        author: {},
        error: false,
    }

    componentDidMount() {
        document.querySelector('.ant-layout-content').scrollTo(0, 0);
        const { location, posts, authors } = this.props;
        this.getPost(location, posts, authors);
    }

    componentWillReceiveProps(nextProps: IProps) {
        const { location, posts, authors } = nextProps;
        this.getPost(location, posts, authors);
    }

    getPost = (location: any, posts: Record<string, IPost>, authors: Record<string, IAuthor>) => {
        const post = posts[location.pathname];
        if (post) {
            const author = authors[post.author];
            this.setState({
                post,
                author,
            });
        } else {
            if (!isEmpty(posts)) {
                this.setState({
                    post: null,
                    error: true,
                });
            }
        }
    }

    handleClickTag = (e: any) => {
        const tag = e.target.textContent;
        this.props.history.push(`/posts?tag=${tag}`);
        this.props.location.pathname = `/posts?tag=${tag}`;
    }

    render() {
        const { error, post, author } = this.state;
        return (
            <div className="container" style={styles.container}>
                {
                    isEmpty(post) && error ? (
                        <ErrorPage status={404} />
                    ) : (
                        <div style={styles.viewContainer}>
                            <h1 style={styles.title}>{post.title}</h1>
                            <div style={styles.createdTime}>{moment(post.date).fromNow()}</div>
                            <Divider />
                            <div className="blog-markdown" dangerouslySetInnerHTML={{ __html: post.content }} />
                            <div style={styles.tags}>
                                <Icon type="tags" style={styles.tagsIcon} />
                                <Tags tags={post.tags ? post.tags.trim().split(',') : []} onClick={this.handleClickTag} />
                            </div>
                            <Divider />
                            <div style={styles.authorInfo}>
                                <AuthorInfo author={author} />
                            </div>
                            <Divider />
                            <Comments />
                        </div>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state: IReducer) => ({
    posts: state.posts.posts,
    authors: state.authors.authors,
});

export default connect(mapStateToProps)(Post);