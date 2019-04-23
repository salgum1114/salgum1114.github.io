import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
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
import { PostActions } from '../actions/posts';
import BackTop from '../components/BackTop';
import Helmet from 'react-helmet';

interface IProps extends RouteChildrenProps {
    id: string;
    posts: Record<string, IPost>;
    authors: Record<string, IAuthor>;
    setPost?: (args?: any) => void;
}

interface IState {
    post: IPost;
    author: IAuthor;
    error: boolean;
}

const styles: CSSMapper = {
    container: { display: 'flex', justifyContent: 'center' },
    viewContainer: { maxWidth: 992, flex: 1, width: 'inherit' },
    postHeader: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '20rem',
        marginBottom: '2rem',
    },
    postCover: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    title: { fontSize: '2.5em', textAlign: 'center', marginBottom: '2rem', lineHeight: '3.2rem', wordBreak: 'break-word', color: '#fff' },
    createdTime: { fontSize: '1.125em', color: '#ffffffc2' },
    createDate: { marginRight: 8 },
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

    componentWillUnmount() {
        this.props.setPost({});
    }

    getPost = (location: any, posts: Record<string, IPost>, authors: Record<string, IAuthor>) => {
        const post = posts[location.pathname];
        if (post) {
            const author = authors[post.author];
            this.setState({
                post,
                author,
            }, () => {
                this.props.setPost(post);
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
        this.props.history.push(`/?tag=${tag}`);
        this.props.location.pathname = `/?tag=${tag}`;
    }

    render() {
        const { error, post, author } = this.state;
        return (
            <div className="container" style={styles.container}>
                {
                    isEmpty(post) && error ? (
                        <ErrorPage status={404} />
                    ) : (
                        <>
                            <Helmet
                                title={post.title}
                            />
                            <div style={styles.viewContainer}>
                                <div className="post-header" style={{ ...styles.postHeader, backgroundImage: `url(${post.cover || '/images/default/no-image.svg'})` }}>
                                    <div style={styles.postCover}>
                                        <h1 className="post-title" style={styles.title}>
                                            {post.title}
                                        </h1>
                                        <div style={styles.createdTime}>
                                            <span style={styles.createDate}>{moment(post.date).format('YYYY.MM.DD')}</span>
                                            <span>{`(${moment(post.date).fromNow()})`}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.content }} />
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
                                <BackTop scrollStepInPx={100} delayInMs={10} />
                            </div>
                        </>
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

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    setPost: PostActions.setPost,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);