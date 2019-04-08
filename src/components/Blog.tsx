import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Container from './Container';
import About from './About';
import Tag from './Tag';

class Blog extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Container>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/tag" component={Tag} />
                    </Container>
                </Switch>
            </Router>
        );
    }
}

export default Blog;