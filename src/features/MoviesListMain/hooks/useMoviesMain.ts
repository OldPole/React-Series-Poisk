import { useQuery } from '@tanstack/react-query';
import { useLocation } from '@tanstack/react-router';
import { useState } from 'react';
import { apiFetch } from '@/core/api/kinopoiskApi';
import type { MovieResponse } from '@/core/api/kinopoiskApi.types';
import { MOVIE_LISTS } from '@/core/constants/constants';

import type {
  FiltersResponse,
  FilterState,
  UseMoviesMainReturn,
} from '../types/moviesListMain.types';

export const useMoviesMain = (): UseMoviesMainReturn => {
  const location = useLocation();

  const searchParams = new URLSearchParams(window.location.search);
  const page = Number(searchParams.get('page')) || 1;

  const [filters, setFilters] = useState<FilterState>({
    order: 'RATING',
    countries: '',
    genreId: '',
    year: '',
  });

  const movieType = MOVIE_LISTS.find(el => el.url === location.pathname);

  const updateFilters = (updates: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...updates }));
    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('page', '1');
    window.history.replaceState({}, '', `?${newSearchParams.toString()}`);
  };

  const filtersQuery = useQuery<FiltersResponse>({
    queryKey: ['filters'],
    queryFn: () => apiFetch('/v2.2/films/filters'),
    staleTime: Infinity,
  });

  const moviesQuery = useQuery<MovieResponse>({
    queryKey: ['movies-main', location.pathname, page, filters],
    queryFn: async () => {
      const params = new URLSearchParams({
        type: movieType?.value || 'FILM',
        order: filters.order,
        page: String(page),
      });

      if (filters.countries) params.append('countries', filters.countries);
      if (filters.year) {
        params.append('yearFrom', filters.year);
        params.append('yearTo', filters.year);
      }

      const genreId =
        location.pathname === '/cartoons' ? '18' : filters.genreId;
      if (genreId) params.append('genres', genreId);

      return apiFetch(`/v2.2/films?${params.toString()}`);
    },
  });

  return {
    moviesData: moviesQuery.data,
    filtersData: filtersQuery.data,
    isLoading: moviesQuery.isLoading || filtersQuery.isLoading,
    isError: moviesQuery.isError || filtersQuery.isError,
    movieType,
    params: { ...filters, page },
    updateFilters,
  };
};
