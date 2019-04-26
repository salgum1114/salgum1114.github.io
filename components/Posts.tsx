import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router, { RouterProps, DefaultQuery } from 'next/router';
import { Card, Avatar } from 'antd';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import debounce from 'lodash/debounce';
import localStorage from 'store/storages/localStorage';

import Masonry from '../components/masonry';
import { CSSMapper } from '../types/utils';
import EmptyPage from '../components/EmptyPage';
import { IPost } from '../types/post';
import { IAuthor } from '../types/author';
import { ITag } from '../types/tag';

interface IProps {
    posts: Record<string, IPost>;
    authors: Record<string, IAuthor>;
    tags: Record<string, ITag>;
    setPost?: (args?: any) => void;
    router?: RouterProps;
}

interface IState {
    posts: Record<string, IPost>;
}

const styles: CSSMapper = {
    thumbnail: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 160,
        overflow: 'hidden',
    },
    title: { wordBreak: 'break-word' },
    card: { margin: '16px 0' },
    cardBody: { height: '12rem' },
    cardCover: {
        width: '100%',
        paddingTop: '56.25%',
        position: 'relative',
        display: 'block',
    },
    cardThumbnail: {
        OObjectFit: 'cover',
        objectFit: 'cover',
        display: 'block',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    cardPreview: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        wordWrap: 'break-word',
        marginTop: '1.5rem',
    },
}

class Posts extends Component<IProps, IState> {
    state: IState = {
        posts: this.props.posts,
    }

    componentDidMount() {
        this.attachEvents();
        const postsScroll = localStorage.read('postsScroll');
        const scrollTop = postsScroll ? parseInt(postsScroll, 10) : 0;
        document.querySelector('.ant-layout-content').scrollTo(0, scrollTop);
        const { tags, posts, router } = this.props;
        this.getPosts(router.query, tags, posts);
    }getPosts

    componentWillReceiveProps(nextProps: IProps) {
        const { tags, posts, router } = nextProps;
        if (!isEmpty(router.query) && !isEmpty(tags)) {
            this.getPosts(router.query, tags, posts);
        } else {
            this.setState({
                posts,
            });
        }
    }

    componentWillUnmount() {
        this.detachEvents()
    }

    onScroll = debounce((e) => {
        localStorage.write('postsScroll', e.target.scrollTop);
    }, 100)

    attachEvents = () => {
        document.querySelector('.ant-layout-content').addEventListener('scroll', this.onScroll);
    }

    detachEvents = () => {
        document.querySelector('.ant-layout-content').removeEventListener('scroll', this.onScroll);
    }

    getPosts = (params: any, tags: Record<string, ITag>, posts: Record<string, IPost>) => {
        const tag = tags[params.tag];
        const search = params.search;
        if (tag && !isEmpty(posts)) {
            const { paths } = tag;
            const filteredPosts = paths.reduce((prev, curr) => {
                const metadata = posts[curr];
                return Object.assign(prev, { [curr]: metadata });
            }, {});
            this.setState({
                posts: filteredPosts,
            });
        } else if(search) {
            const filteredPosts = Object.keys(posts).reduce((prev, curr) => {
                const metadata = posts[curr];
                if (metadata.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
                || metadata.preview.toLowerCase().indexOf(search.toLowerCase()) >= 0
                || metadata.tags.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                    return Object.assign(prev, { [curr]: metadata });
                }
                return prev;
            }, {});
            this.setState({
                posts: filteredPosts,
            });
        } else {
            this.setState({
                posts,
            });
        }
    }

    handleClick = (metadata: IPost) => {
        const postHistory = JSON.parse(localStorage.read('postHistory')) || [];
        const findIndex = postHistory.findIndex((value: any) => value.path === metadata.path);
        if (findIndex >= 0) {
            postHistory.splice(findIndex, 1);
        }
        postHistory.unshift({
            path: metadata.path,
            title: metadata.title,
        });
        localStorage.write('postHistory', JSON.stringify(postHistory));
        Router.push(metadata.path);
    }

    renderCard = () => {
        const { authors } = this.props;
        const { posts } = this.state;
        return !isEmpty(posts) && !isEmpty(authors) ? (
            <Masonry.Box>
                {
                    Object.keys(posts).map(key => {
                        const metadata = posts[key];
                        const author = authors[metadata.author];
                        return (
                            <Masonry.Item key={key} className="container-col" col="3">
                                <Card
                                    hoverable={true}
                                    onClick={() => this.handleClick(metadata)}
                                    cover={
                                        <Link as={key} href={`/post?slug=${key}`}>
                                            <a style={styles.cardCover}>
                                                <img
                                                    style={styles.cardThumbnail}
                                                    alt="Post cover"
                                                    src={metadata.cover || '/images/default/no-image.svg'}
                                                />
                                            </a>
                                        </Link>
                                    }
                                    bodyStyle={styles.cardBody}
                                >
                                    <Card.Meta
                                        avatar={<Avatar src={author.avatar}>{author.name.charAt(0).toUpperCase()}</Avatar>}
                                        title={<h2 className="ant-card-meta-title">{metadata.title.length > 30 ? metadata.title.substring(0, 30).concat('...') : metadata.title}</h2>}
                                        description={moment(metadata.date).fromNow()}
                                    />
                                    <div style={styles.cardPreview}>
                                        {metadata.preview}
                                    </div>
                                </Card>
                            </Masonry.Item>
                        );
                    })
                }
            </Masonry.Box>
        ) : <EmptyPage />;
    }

    render() {
        return (
            <div className="container">
                <Head>
                    <title>Dev.log</title>
                </Head>
                {this.renderCard()}
            </div>
        );
    }
}

export default Posts;
