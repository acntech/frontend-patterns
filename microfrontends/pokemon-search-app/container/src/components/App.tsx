import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Pokemons from '../external-components/Pokemons';

const App = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={HomePage} />
                <Route path="/pokemons" component={Pokemons} />
            </div>
        </Router>
    )
};

export default App;
