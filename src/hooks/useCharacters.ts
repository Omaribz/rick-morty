import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string | null;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }
  
  interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  }
  
  interface CharacterResponse {
    info: Info;
    results: Character[];
  }

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<CharacterResponse>("/character")
      .then((res) => setCharacters(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return { characters, error};
}

export default useCharacters