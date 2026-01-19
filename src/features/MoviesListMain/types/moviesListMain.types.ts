import type { MovieResponse } from '@/core/api/kinopoiskApi.types';
import type { MenuItem } from '@/core/constants/constants.types';

export interface Genre {
  id: number;
  genre: string;
}

export interface Country {
  id: number;
  country: string;
}

export interface FiltersResponse {
  genres: Genre[];
  countries: Country[];
}

export interface FilterState {
  order: string;
  countries: string;
  genreId: string;
  year: string;
}

interface MovieListParams extends FilterState {
  page: number;
}

export interface UseMoviesMainReturn {
  moviesData: MovieResponse | undefined;
  filtersData: FiltersResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  movieType: MenuItem | undefined;
  params: MovieListParams;
  updateFilters: (updates: Partial<FilterState>) => void;
}
