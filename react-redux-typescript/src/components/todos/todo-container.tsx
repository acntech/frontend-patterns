import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

import {TodoDetailsConnected} from './todo-details';
import {TodoListConnected} from './todo-list';

class TodoContainer extends React.Component<{}> {

    public render() {
        /* The "as any" in the first route component prop is there because of a
        *  known bug in the react-router-dom typings when used with redux connect.
        */
        return (
            <Switch>
                <Route path="/todos/:id" component={TodoDetailsConnected as any}/>
                <Route path="/" component={TodoListConnected}/>
            </Switch>
        );
    }
}

export {TodoContainer};
