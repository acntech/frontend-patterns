import * as React from 'react';
import {TodoListConnected} from './todos';

class AppComponent extends React.Component<{}> {

    public render() {
        return (
            <div className="container">
                <h1>React Redux TypeScript starter</h1>
                <TodoListConnected />
            </div>
        );
    }
}

export { AppComponent };
