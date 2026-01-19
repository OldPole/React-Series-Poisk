import { createRoute } from '@tanstack/react-router';
import { MOVIE_LISTS } from '@/core/constants/constants';
import { Route as rootRoute } from '@/core/layouts/__root';

import { MoviesListMainView } from './views/MoviesListMainView';

export const MoviesMainRoutes = MOVIE_LISTS.map(list =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: list.url,
    component: MoviesListMainView,
  }),
);
