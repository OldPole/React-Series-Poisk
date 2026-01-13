import { createRoute } from '@tanstack/react-router';

import { Route as rootRoute } from '../../core/layouts/__root';
import { MoviesView } from './views/MoviesView';

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: MoviesView,
});
