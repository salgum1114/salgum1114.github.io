import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import App from './App';
import './styles/index.less';
import store from './store';
import { IRoute } from './types/utils';
import { metadataService } from './services';

const init = async () => {
    let routes: IRoute[] = [];
    try {
        const response = await metadataService.getRoutes();
        routes = response.data;
    } catch (error) {
        console.error('Network error');
    }
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    const render = (Component: any) => {
        const rootElement = document.getElementById('root');
        ReactDom.render(
            <AppContainer>
                <Provider store={store()}>
                    <Component routes={routes} />
                </Provider>
            </AppContainer>,
            rootElement,
        );
    };

    render(App);
    if (module.hot) {
        module.hot.accept('./App', () => {
            render(App);
        });
    }
}

init();