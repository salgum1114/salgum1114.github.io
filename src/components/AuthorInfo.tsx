import React, { Component } from 'react';
import { Avatar } from 'antd';
import isEmpty from 'lodash/isEmpty';
import { Link } from 'react-router-dom';

import { IAuthor } from '../types/author';
import { CSSMapper } from '../types/utils';

export interface IAuthorInfoProps {
    author?: IAuthor;
}

const styles: CSSMapper = {
    container: { display: 'flex', margin: '16px 0' },
    avatarContainer: { marginRight: 16 },
    avatar: {},
    title: { fontWeight: 500, color: '#212529' },
    description: { wordBreak: 'break-word', color: '#868e96' },
}

class AuthorInfo extends Component<IAuthorInfoProps> {
    render() {
        const { author } = this.props;
        if (isEmpty(author) || typeof author === 'string') {
            return null;
        }
        return (
            <div style={styles.container}>
                <div style={styles.avatarContainer}>
                    <Avatar style={styles.avatar} src={author.avatar} alt={author.title} size="large">
                        {author.title ? author.title.charAt(0).toUpperCase() : ''}
                    </Avatar>
                </div>
                <div>
                    <Link to={`/account/${author.name}`}><span style={styles.title}>{author.title}</span></Link>
                    <div style={styles.description}>{author.bio}</div>
                </div>
            </div>
        );
    }
}

export default AuthorInfo;