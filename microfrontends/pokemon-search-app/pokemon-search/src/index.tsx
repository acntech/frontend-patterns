import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './components/App';

import './styles.css';

(window as any).Pokemons = {
    mount: () => {
        ReactDOM.render(<App />, document.getElementById('pokemons'));
    },
    unmount: () => {
        const element = document.getElementById('pokemons');
        if (element) {
            ReactDOM.unmountComponentAtNode(element);
        }
    }
};


ReactDOM.render(<App />, document.getElementById('pokemons'));