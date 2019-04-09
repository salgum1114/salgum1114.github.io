import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as rootReducers from '../reducers';

export default function () {
    const reducer = combineReducers(rootReducers);
    let store: any;
    const enhancer = applyMiddleware(thunkMiddleware);
    if (process.env.NODE_ENV === 'development') {
        store = createStore(reducer, composeWithDevTools(enhancer));
    } else {
        store = createStore(reducer, enhancer);
    }
    if (module.hot) {
        module.hot.accept(rootReducers, () => {
            store.replaceReducer(rootReducers);
        });
    }
    return store;
}
