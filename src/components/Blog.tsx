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
                        <Route exact path="/about" component={About} />
                        <Route exact path="/tag" component={Tag} />
                    </Container>
                </Switch>
            </Router>
        );
    }
}

export default Blog;