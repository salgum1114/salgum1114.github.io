import React, { Component } from 'react';

class ScrollToTopOnMount extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
        console.log('awetawta');
    }

    render() {
        return null;
    }
}

export default ScrollToTopOnMount;
