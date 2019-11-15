import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';

(window as any).mountVoteApp = (containerId: string, basepath: string, history?: any) => {
    ReactDOM.render(
        <App basepath={basepath} history={history} />,
        document.getElementById(containerId)
    );
};

(window as any).unmountVoteApp = (containerId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
