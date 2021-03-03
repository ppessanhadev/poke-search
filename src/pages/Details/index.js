import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading, PokemonDetail } from '../../components';
import { fetchPokemon } from '../../services/pokemonApi';

const Details = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPokemon = async () => {
      setPokemon(await fetchPokemon(id));
      setIsLoading(!isLoading);
    };
    getPokemon();
  }, []);

  if (isLoading) return <Loading />;
  return <PokemonDetail pokemon={ pokemon } />;
};

export default Details;
