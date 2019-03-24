import * as React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';

import { AppComponent } from './components/app';
import {configureStore} from './store';

// Polyfill for the fetch api that is missing in i.e. IE11.
import 'whatwg-fetch';

const store = configureStore();

const RootComp = () => (
    <Provider store={store}>
        <AppComponent />
    </Provider>
);

render(<RootComp/>, document.getElementById('root'));
