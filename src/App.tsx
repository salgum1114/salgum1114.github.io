import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Container from './components/Container';
import Home from './components/Home';
import About from './components/About';
import Tag from './components/Tag';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Container>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/tag" component={Tag} />
                    </Container>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
