import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Header } from '../core/layouts/Header';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-zinc-950 text-white">
        <Header />
        <main>
          <Outlet />
        </main>
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
