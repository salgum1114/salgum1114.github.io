import React, { PureComponent } from 'react';

export interface IMasonryItem {
    col?: string | number;
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

class Item extends PureComponent<IMasonryItem> {
    static defaultProps = {
        col: '',
        className: '',
    }

    render() {
        const { children, col, className, ...other } = this.props;
        return (
            <div className={`${className} blog-masonry-item col-${col}`} {...other}>
                {children}
            </div>
        );
    }
}

export default Item;
