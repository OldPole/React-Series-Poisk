import { createRoute } from '@tanstack/react-router';
import { TOP_LISTS } from '@/core/constants/constants';
import { Route as rootRoute } from '@/core/layouts/__root';

import { MoviesListTopView } from './views/MoviesListTopView';

export const MoviesListTopRoutes = TOP_LISTS.map(list =>
  createRoute({
    getParentRoute: () => rootRoute,
    path: list.url,
    component: MoviesListTopView,
  }),
);
