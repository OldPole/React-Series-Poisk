import { createRoute } from '@tanstack/react-router';
import type { MovieSearch } from '@/core/api/kinopoiskApi.types';
import { TOP_LISTS } from '@/core/constants/constants';
import { Route as rootRoute } from '@/core/layouts/__root';

import { MoviesListTopView } from './views/MoviesListTopView';

export const MoviesListTopRoutes = TOP_LISTS.map(list =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: list.url,
    validateSearch: (search: Record<string, unknown>): MovieSearch => ({
      page: Number(search?.page) || 1,
    }),
    component: MoviesListTopView,
  }),
);
