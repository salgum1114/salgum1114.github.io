import React, { Component } from 'react';
import { Tag } from 'antd';

interface IProps {
    tags: string[];
    style?: React.CSSProperties;
    tagStyle?: React.CSSProperties;
    onClick?: React.MouseEventHandler;
}

class Tags extends Component<IProps> {
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