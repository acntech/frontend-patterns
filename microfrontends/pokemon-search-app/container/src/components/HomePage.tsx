import * as React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
            <h1>HomePage</h1>
            <Link to="/pokemons">Pokemons</Link>
            <button type="button" className="btn btn-primary">Test</button>
        </>

    );
}

export default HomePage;
