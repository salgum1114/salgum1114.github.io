import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Card, Avatar } from 'antd';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';
import Masonry from '../components/masonry';

import { CSSMapper } from '../types/utils';
import { IReducer } from '../reducers';
import EmptyPage from '../components/EmptyPage';
import { IPost } from '../types/post';
import { IAuthor } from '../types/author';
import { ITag } from '../types/tag';

interface IProps extends RouteChildrenProps {
    metadatas: Record<string, IPost>;
    authors: Record<string, IAuthor>;
    tags: Record<string, ITag>;
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
        const { tags, metadatas, location } = this.props;
        this.getMetadatas(location.search, tags, metadatas);
        document.querySelector('.ant-layout-content').scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps: IProps) {
        const { tags, metadatas, location } = nextProps;
        if (location.search && location.search.length && !isEmpty(tags)) {
            this.getMetadatas(nextProps.location.search, tags, metadatas);
        } else {
            this.setState({
                metadatas,
            });
        }
    }

    getMetadatas = (searchParams: string, tags: Record<string, ITag>, metadatas: Record<string, IPost>) => {
        const params = new URLSearchParams(searchParams);
        const tag = tags[params.get('tag')];
        const search = params.get('search');
        if (tag) {
            const { paths } = tag;
            const filteredMetadatas = paths.reduce((prev, curr) => {
                return Object.assign(prev, { [curr]: metadatas[curr] });
            }, {});
            this.setState({
                metadatas: filteredMetadatas,
            });
        } else if(search) {
            const filteredMetadatas = Object.keys(metadatas).reduce((prev, curr) => {
                const metadata = metadatas[curr];
                if (metadata.title.includes(search)
                || metadata.preview.includes(search)
                || metadata.tags.includes(search)) {
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

    renderCard = () => {
        const { history, location, authors } = this.props;
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
                                    onClick={() => {
                                        const pathname = key;
                                        location.pathname = pathname;
                                        history.push(pathname);
                                    }}
                                    cover={
                                        <Link style={styles.cardCover} to={key}>
                                            <img
                                                style={styles.cardThumbnail}
                                                alt="logo"
                                                src={metadata.cover || 'https://cdn.shopify.com/s/files/1/1380/9193/t/3/assets/no-image.svg?2375582141201571545'}
                                            />
                                        </Link>
                                    }
                                    bodyStyle={styles.cardBody}
                                >
                                    <Card.Meta
                                        avatar={<Avatar src={author.avatar}>{author.name.charAt(0).toUpperCase()}</Avatar>}
                                        title={metadata.title.length > 30 ? metadata.title.substring(0, 30).concat('...') : metadata.title}
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
                {this.renderCard()}
            </div>
        );
    }
}

const mapSateToProps = (state: IReducer) => ({
    metadatas: state.posts.metadatas,
    authors: state.authors.authors,
    tags: state.tags.tags,
});

export default connect(mapSateToProps)(Posts);