import * as React from 'react';

import usePokemons from '../hooks/usePokemons';

const App = () => {
    const pokemons = usePokemons({});
    const createPokemonCard = (pokemon: any, index: number) => (
        <a href={`/pokemons/${pokemon.name}`} key={index}>
            <div className="d-flex card">
                {pokemon.name}
            </div>
        </a>
    )
    return (
        <div>
            <h1>Pokemonssss!</h1>
            <button type="button" className="btn btn-primary green">Primary</button>
            {pokemons.map((pokemon, index) => createPokemonCard(pokemon, index))}
        </div>
    )
};

export default App;
