import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Card, Avatar } from 'antd';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';

import { CSSMapper } from '../types/utils';
import EmptyPage from '../components/EmptyPage';
import { IReducer } from '../reducers';
import { IPost } from '../types/post';
import { IAuthor } from '../types/author';

interface IProps extends RouteChildrenProps {
    metadatas: Record<string, IPost>;
    authors: Record<string, IAuthor>;
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

class Posts extends Component<IProps> {
    renderCard = () => {
        const { metadatas, history, location, authors } = this.props;
        return !isEmpty(metadatas) ? (
            Object.keys(metadatas).map(key => {
                const metadata = metadatas[key];
                const author = authors[metadata.author];
                return (
                    <Col key={key} className="container-col" xs={24} md={24} lg={12} xl={8} xxl={6}>
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
                    </Col>
                );
            })
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
});

export default connect(mapSateToProps)(Posts);