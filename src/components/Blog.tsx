import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Container from './Container';
import About from './About';
import Tag from './Tag';

class Blog extends Component {
    render() {
        console.log(this.props, this.context);
        return (
            <Switch>
                <Container>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/tag" component={Tag} />
                </Container>
            </Switch>
        );
    }
}

export default Blog;