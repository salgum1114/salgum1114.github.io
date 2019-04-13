import React, { Component } from 'react';

interface IProps {
    location?: any;
}

class ScrollToTop extends Component<IProps> {
    componentDidUpdate(prevProps: IProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }
  
    render() {
        return this.props.children;
    }
}

export default ScrollToTop;