import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router';

interface IProps extends RouteChildrenProps {
    
}

class Posts extends Component<IProps> {
    render() {
        console.log(this.props);
        return (
            <div>
                Posts
            </div>
        );
    }
}

export default Posts;