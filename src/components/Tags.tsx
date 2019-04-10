import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

interface IProps {
    tags: string[];
    style?: React.CSSProperties;
}

class Tags extends Component<IProps> {
    static propTypes = {
        style: PropTypes.object,
        tagStyle: PropTypes.object,
        tags: PropTypes.arrayOf(PropTypes.string),
    }

    static defaultProps: IProps = {
        tags: [],
    }

    render() {
        const { tags, style, tagStyle, ...other } = this.props;
        return (
            <div style={style}>
                {tags.map((tag, index) => <Tag key={`${tag}_${index}`} style={tagStyle} {...other}>{tag}</Tag>)}
            </div>
        );
    }
}

export default Tags;