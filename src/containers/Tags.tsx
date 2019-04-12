import React, { Component } from 'react';
import { Tag } from 'antd';
import { TagProps } from 'antd/lib/tag';

export interface ITagsProps extends TagProps {
    tags?: string[];
    style?: React.CSSProperties;
    tagStyle?: React.CSSProperties;
}

class Tags extends Component<ITagsProps> {
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