import React, { Component } from 'react';
import { Divider, Icon } from 'antd';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import Router, { RouterProps } from 'next/router';
import Helmet from 'react-helmet';

import { IPost } from '../types/post';
import { CSSMapper } from '../types/utils';
import ErrorPage from '../components/ErrorPage';
import Tags from '../components/Tags';
import Comments from '../components/Comments';
import AuthorInfo from '../components/AuthorInfo';
import { IAuthor } from '../types/author';
import BackTop from '../components/BackTop';
import Events from '../utils/Events';

interface IProps {
    id: string;
    posts: Record<string, IPost>;
    authors: Record<string, IAuthor>;
    setPost?: (args?: any) => void;
    router?: RouterProps;
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
        const { router, posts, authors } = this.props;
        this.getPost(router, posts, authors);
    }

    componentWillReceiveProps(nextProps: IProps) {
        const { router, posts, authors } = nextProps;
        this.getPost(router, posts, authors);
    }

    componentWillUnmount() {
        Events.emit('setpost', {});
    }

    getPost = (router: any, posts: Record<string, IPost>, authors: Record<string, IAuthor>) => {
        const post = posts[router.query.slug];
        if (post) {
            const author = authors[post.author];
            this.setState({
                post,
                author,
            }, () => {
                Events.emit('setpost', post);
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
        Router.push(`/?tag=${tag.trim()}`);
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
                            <Helmet title={post.title} />
                            <div style={styles.viewContainer}>
                                <div className="post-header" style={{ ...styles.postHeader, backgroundImage: `url(${post.cover || '/static/images/default/no-image.svg'})` }}>
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
                                <div className="blog-markdown">
                                    <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>
                                <div style={styles.tags}>
                                    <Icon type="tags" style={styles.tagsIcon} />
                                    <Tags tagStyle={{ cursor: 'pointer' }} tags={post.tags ? post.tags.trim().split(',') : []} onClick={this.handleClickTag} />
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

export default Post;
