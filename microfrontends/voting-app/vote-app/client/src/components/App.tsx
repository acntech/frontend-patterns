import * as React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Home from './Home';
import Vote from './Vote';
import Votes from './Votes';
import { createBrowserHistory } from 'history';

interface IAppProps {
    basepath: string;
    history?: any;
}

const defaultHistory = createBrowserHistory();

const App: React.FC<IAppProps> = (props) => {
    const { history = defaultHistory, basepath } = props;

    console.log(history);

    return (
        <Router history={history}>
            <Switch>
                <Route exact path={`${basepath}`} component={() => <Home basepath={props.basepath} />} />
                <Route path={`${basepath}/create`} component={Vote} />
                <Route path={`${basepath}/list`} component={Votes} />
            </Switch>
        </Router>
    );
};

export default App;
