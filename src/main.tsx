import { createRouter, RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/core/assets/css/App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route as rootRoute } from '@/core/layouts/__root';
import { moviesRoute } from '@/features/Movies/movies.routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const routeTree = rootRoute.addChildren([moviesRoute]);

export const router = createRouter({ routeTree, context: { queryClient } });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
