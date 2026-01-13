import { createRouter } from '@tanstack/react-router';

import { Route as rootRoute } from './core/layouts/__root';

const routeTree = rootRoute.addChildren([]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
