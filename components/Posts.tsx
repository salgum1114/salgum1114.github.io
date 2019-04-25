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
    metadatas: Record<string, IPost>;
    authors: Record<string, IAuthor>;
    tags: Record<string, ITag>;
    setPost?: (args?: any) => void;
    router?: RouterProps;
}

interface IState {
    metadatas: Record<string, IPost>;
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
    state = {
        metadatas: this.props.metadatas,
    }

    componentDidMount() {
        this.attachEvents();
        const postsScroll = localStorage.read('postsScroll');
        const scrollTop = postsScroll ? parseInt(postsScroll, 10) : 0;
        document.querySelector('.ant-layout-content').scrollTo(0, scrollTop);
        const { tags, metadatas, router } = this.props;
        this.getMetadatas(router.query, tags, metadatas);
    }

    componentWillReceiveProps(nextProps: IProps) {
        const { tags, metadatas, router } = nextProps;
        if (!isEmpty(router.query) && !isEmpty(tags)) {
            this.getMetadatas(router.query, tags, metadatas);
        } else {
            this.setState({
                metadatas,
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

    getMetadatas = (params: any, tags: Record<string, ITag>, metadatas: Record<string, IPost>) => {
        const tag = tags[params.tag];
        const search = params.search;
        if (tag && !isEmpty(metadatas)) {
            const { paths } = tag;
            const filteredMetadatas = paths.reduce((prev, curr) => {
                const metadata = metadatas[curr];
                return Object.assign(prev, { [curr]: metadata });
            }, {});
            this.setState({
                metadatas: filteredMetadatas,
            });
        } else if(search) {
            const filteredMetadatas = Object.keys(metadatas).reduce((prev, curr) => {
                const metadata = metadatas[curr];
                if (metadata.title.toLowerCase().indexOf(search.toLowerCase()) >= 0
                || metadata.preview.toLowerCase().indexOf(search.toLowerCase()) >= 0
                || metadata.tags.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
                    return Object.assign(prev, { [curr]: metadata });
                }
                return prev;
            }, {});
            this.setState({
                metadatas: filteredMetadatas,
            });
        } else {
            this.setState({
                metadatas,
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
        const { metadatas } = this.state;
        return !isEmpty(metadatas) && !isEmpty(authors) ? (
            <Masonry.Box>
                {
                    Object.keys(metadatas).map(key => {
                        const metadata = metadatas[key];
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
