import { useQueries } from '@tanstack/react-query';
import { apiFetch } from '@/core/api/kinopoiskApi';

import type { DetailedMovie, RelatedMovie, Staff } from '../types/movies.types';

export const useMovieDetail = (movieId: string) => {
  const results = useQueries({
    queries: [
      {
        queryKey: ['movie', movieId],
        queryFn: () => apiFetch<DetailedMovie>(`/v2.2/films/${movieId}`),
      },
      {
        queryKey: ['movie', 'staff', movieId],
        queryFn: () => apiFetch<Staff[]>(`/v1/staff?filmId=${movieId}`),
      },
      {
        queryKey: ['movie', 'related', movieId],
        queryFn: () =>
          apiFetch<RelatedMovie[]>(
            `/v2.1/films/${movieId}/sequels_and_prequels`,
          ),
        retry: false,
      },
    ],
  });

  return {
    isPending: results[0].isPending,
    isError: results[0].isError,
    movie: results[0].data,
    staff: results[1].data,
    related: results[2].data,
  };
};
