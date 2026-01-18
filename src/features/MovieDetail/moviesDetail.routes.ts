import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from '@/core/layouts/__root';

import { MovieDetailView } from './views/MovieDetailView';

export const movieDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/movie/$movieId',
  component: MovieDetailView,
});
