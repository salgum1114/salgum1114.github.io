import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, matchPath, withRouter, Redirect } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

import Container from './containers/Container';
import { IRoute } from './types/utils';
import Posts from './containers/Posts';
import Post from './containers/Post';
import ErrorPage from './components/ErrorPage';
import Tags from './containers/Tags';
import { metadataService } from './services';
import { PostActions } from './actions/posts';
import { AuthorActions } from './actions/authors';

moment.locale('ko');

interface IProps {
    routes: IRoute[];
    setPosts: (args?: any) => void;
    setMetadata: (args?: any) => void;
    setAuthors: (args?: any) => void;
};

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
        metadataService.getPosts().then(response => {
            this.props.setPosts(response.data);
        });
        metadataService.getAuthors().then(response => {
            this.props.setAuthors(response.data);
        });
        metadataService.getMetadata().then(response => {
            this.props.setMetadata(response.data);
        });
    }

    getRouteComponent = (layout: string): any => {
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
            component={this.getRouteComponent(route.layout)}
        />
    )

    render() {
        const routes = isEmpty(this.props.routes) ? [] : this.props.routes;
        const mRoutes = this.routeWithSubRoutes(routes);
        return (
            <BrowserRouter>
                <Switch>
                    <MainRoute routes={routes}>
                        <Route
                            exact={true}
                            path="/"
                            component={Posts}
                        />
                        {mRoutes}
                    </MainRoute>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    setPosts: PostActions.setPosts,
    setMetadata: PostActions.setMetadata,
    setAuthors: AuthorActions.setAuthors,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
