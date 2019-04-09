import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, matchPath, withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import Container from './containers/Container';
import Home from './components/Home';
import { IRoute } from './types/utils';
import Posts from './containers/Posts';
import Post from './containers/Post';
import ErrorPage from './components/ErrorPage';
import Tags from './containers/Tags';
import { postSerivces } from './services';

interface IProps {
    routes: IRoute[];
}

const invalidPath = (routes: IRoute[], path: string) => {
    return routes.some((route: IRoute) => {
        const matched = matchPath(path, {
            exact: true,
            strict: true,
            path: route.path,
        });
        if (matched) {
            return true;
        }
        if (route.routes) {
            const exist = invalidPath(route.routes, path);
            if (exist) {
                return true;
            }
        }
        return false;
    });
};

const MainRoute = withRouter((props: any) => {
    const { location, children, routes } = props;
    let status = location && location.state && location.state.status;
    if (!status && location.pathname !== '/') {
        const invalid = invalidPath(routes, location.pathname);
        if (!invalid) {
            status = 404;
        }
    }
    return (
        <Container {...props}>
            {status === 0 || status ? <ErrorPage status={status} /> : children}
        </Container>
    );
});

class App extends Component<IProps> {
    componentDidMount() {
        this.getPosts();
    }

    getPosts = async () => {
        try {
            const response = await postSerivces.getAllPosts();
            const posts = response.data;
            const fResult = await Promise.all(posts.map((post: string) => postSerivces.getPosts(`/_posts/${post}`)));
            const sResult = await Promise.all(fResult.map(r => Promise.all(r.data.map(d => postSerivces.getPost(`${r.config.url}/${d}`)))));
            console.log(sResult);
        } catch (error) {
            console.error(error);
        }
    }

    getComponent = (layout: string) => {
        if (layout === 'posts') {
            return Posts;
        } else if (layout === 'post') {
            return Post;
        } else if (layout === 'tags') {
            return Tags;
        } else {
            return null;
        }
    }

    routeWithSubRoutes = (routes: IRoute[]) => routes.reduce((prev, route) => (
        prev.concat(
            <Switch key={route.path}>
                {this.route(route)}
                {
                    route.routes ? route.routes.reduce((p, c) => {
                        if (c.routes) {
                            return p.concat(this.route(c)).concat(c.routes.map(r => this.route(r)));
                        }
                        return p.concat(this.route(c));
                    }, []) : null
                }
            </Switch>,
        )
    ), []);

    route = (route: IRoute) => (
        <Route
            key={route.path}
            path={route.path}
            exact={true}
            component={this.getComponent(route.layout)}
        />
    )

    render() {
        const routes = isEmpty(this.props.routes) ? [] : this.props.routes;
        const mRoutes = this.routeWithSubRoutes(routes);
        return (
            <BrowserRouter>
                <Switch>
                    <MainRoute routes={routes}>
                        <Route exact={true} path="/" component={Home} />
                        {mRoutes}
                    </MainRoute>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
