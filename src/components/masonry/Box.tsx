import React, { PureComponent } from 'react';
import ReactMasonry from 'react-masonry-component';

export interface IMasonryBox {
    options?: object;
}

class Box extends PureComponent<IMasonryBox> {
    render() {
        const { children, options, ...other } = this.props;
        const newOptions = Object.assign({}, {
            itemSelector: '.blog-masonry-item',
            // columnWidth: '.at-masonry-sizer',
            percentPosition: true,
            transitionDuration: '0.2s',
        }, options);
        return (
            <ReactMasonry
                options={newOptions}
                {...other}
            >
                <div className="blog-masonry-sizer" />
                {children}
            </ReactMasonry>
        );
    }
}

export default Box;
