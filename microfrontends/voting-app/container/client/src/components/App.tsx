import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import VoteApp from './VoteApp';
import HomePage from './HomePage';

interface IAppProps {
    name: string;
}

const App: React.FC<IAppProps> = props => {
    return (
        <div className="container">
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/votes" component={VoteApp} />
                </Switch>
            </BrowserRouter>
            <Sidebar />
            <Footer />
        </div>

    );
};

export default App;
