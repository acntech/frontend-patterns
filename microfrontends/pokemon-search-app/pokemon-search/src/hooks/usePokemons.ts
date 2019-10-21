import * as React from "react";
import axios from "axios";

interface IFetchPokemon {
  url?: string;
}

const usePokemons = (props: IFetchPokemon) => {
  const [pokemons, setPokemons] = React.useState([]);

  const url = props.url
    ? props.url
    : "https://pokeapi.co/api/v2/pokemon?limit=50";

  React.useEffect(() => {
    axios
      .get(url)
      .then(result => result.data && setPokemons(result.data.results));
  }, [props.url]);

  return pokemons;
};

export default usePokemons;
