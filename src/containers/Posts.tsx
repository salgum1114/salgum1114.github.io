import React, { Component } from 'react';
import { RouteChildrenProps } from 'react-router';
import { postSerivces } from '../services';

interface IProps extends RouteChildrenProps {
    
}

class Posts extends Component<IProps> {
    componentDidMount() {
        const splitPathname = this.props.location.pathname.split('/');
        if (splitPathname.length === 2) {

        } else if (splitPathname.length === 3) {
            const key = splitPathname[2];
            console.log(key);
        }
    }

    render() {
        return (
            <div>
                Posts
            </div>
        );
    }
}

export default Posts;