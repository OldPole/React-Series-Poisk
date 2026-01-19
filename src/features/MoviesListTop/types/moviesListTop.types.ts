import type { MovieResponse } from '@/core/api/kinopoiskApi.types';
import { type MenuItem } from '@/core/constants/constants.types';

export interface UseMoviesCategoryTop {
  data: MovieResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  currentList: MenuItem | undefined;
  currentPage: number;
}
