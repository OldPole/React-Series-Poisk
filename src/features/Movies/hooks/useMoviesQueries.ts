import { useQueries } from '@tanstack/react-query';
import { apiFetch } from '@/core/api/kinopoiskApi';
import type { MovieResponse } from '@/core/api/kinopoiskApi.types';

import type { moviesContentReturn } from '../types/movies.types';

export const useMoviesPageContent = (page: number = 1): moviesContentReturn => {
  const configs = [
    { key: 'popular', url: '/v2.2/films/collections?type=TOP_POPULAR_ALL' },
    { key: 'best', url: '/v2.2/films/collections?type=TOP_250_MOVIES' },
    { key: 'films', url: '/v2.2/films?type=FILM' },
    { key: 'serials', url: 'v2.2/films?type=TV_SERIES' },
    { key: 'cartoons', url: '/v2.2/films?genres=18' },
  ];

  const results = useQueries({
    queries: configs.map(({ key, url }) => ({
      queryKey: ['movies', key, page],
      queryFn: () => apiFetch<MovieResponse>(`${url}&page=${page}`),
    })),
  });

  return {
    isPending: results.some(result => result.isPending),
    isError: results.some(result => result.isError),
    data: {
      popular: results[0].data,
      best: results[1].data,
      films: results[2].data,
      serials: results[3].data,
      cartoons: results[4].data,
    },
  };
};
