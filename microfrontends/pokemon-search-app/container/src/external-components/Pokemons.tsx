import * as React from 'react';
import { Link } from 'react-router-dom';

const Pokemons = () => {
    React.useEffect(() => {
        const pokemons = (window as any).Pokemons;
        pokemons && pokemons.mount();
        return () => {
            pokemons.unmount();
        };
    }, [])

    return (
        <>
            <Link to="/">Hjem</Link>
            <button type="button" className="btn btn-primary green">Test</button>
            <div id="pokemons"></div>
        </>
    )
};

export default Pokemons;