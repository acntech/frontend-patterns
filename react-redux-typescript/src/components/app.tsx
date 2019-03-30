import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import {TodoContainer} from './todos';

class AppComponent extends React.Component<{}> {

    public render() {
        return (
            <Router>
                <div className="container">
                    <h1>React Redux TypeScript starter</h1>
                    <TodoContainer/>
                </div>
            </Router>
        );
    }
}

export { AppComponent };
