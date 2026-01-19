import { useQuery } from '@tanstack/react-query';
import { useLocation } from '@tanstack/react-router';
import { apiFetch } from '@/core/api/kinopoiskApi';
import type { MovieResponse } from '@/core/api/kinopoiskApi.types';
import { TOP_LISTS } from '@/core/constants/constants';

import type { UseMoviesCategoryTop } from '../types/moviesListTop.types';

export const useMoviesTop = (): UseMoviesCategoryTop => {
  const location = useLocation();
  const searchParams = new URLSearchParams(window.location.search);
  const page = Number(searchParams.get('page')) || 1;

  const currentList = TOP_LISTS.find(el => el.url === location.pathname);

  const query = useQuery({
    queryKey: ['movies-top', location.pathname, page],
    queryFn: () =>
      apiFetch<MovieResponse>(
        `/v2.2/films/collections?type=${currentList?.value}&page=${page}`,
      ),
  });

  return { ...query, currentList, currentPage: page };
};
