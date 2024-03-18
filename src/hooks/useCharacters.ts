import apiClient from '../services/api-client';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export interface Character {
    id: number;
    name: string;
    location: {
      name: string;
    };
    image: string;
  }
  
  interface Info {
    count: number;
    pages: number;
  }
  
  export interface CharacterResponse {
    info: Info;
    results: Character[];
  }

const useCharacters = (page: number) => useQuery({
  queryKey: ['characters', page],
  queryFn: () => {
    return apiClient
      .get<CharacterResponse>(`/character/?page=${page}`)
      .then((res) => res.data)  
  },
  staleTime: 24 * 60 * 60 * 1000, //24h
  placeholderData: keepPreviousData
})

export default useCharacters;