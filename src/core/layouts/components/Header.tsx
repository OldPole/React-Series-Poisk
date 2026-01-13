import { Link } from '@tanstack/react-router';
import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

import {
  iconComponents,
  MOVIE_LISTS,
  TOP_LISTS,
} from '../../constants/constants';

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent py-5 transition-all">
        <div className="mx-auto flex w-[1280px] items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setOpen(true)}
              className="cursor-pointer text-white transition-colors hover:text-red-600"
            >
              <Menu size={28} />
            </button>
            <Link
              to="/"
              className="text-3xl font-black tracking-tighter text-red-600"
            >
              SeriesPoisk
            </Link>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Поиск..."
              className="w-80 rounded-md border border-zinc-700 bg-zinc-800/50 px-3 py-1.5 pl-10 text-sm text-white outline-none focus:border-red-600"
            />
            <Search size={18} className="absolute top-2 left-3 text-zinc-500" />
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] ${isOpen ? 'visible' : 'invisible'}`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 left-0 h-full w-80 bg-zinc-900 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex items-center justify-between p-6">
            <span className="text-xl font-black text-red-600">SeriesPoisk</span>
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer text-zinc-500 transition-colors hover:text-white"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex max-h-[calc(100vh-100px)] flex-col gap-4 overflow-y-auto px-4">
            <div className="flex flex-col gap-1 border-b border-zinc-800 pb-4">
              {TOP_LISTS.map(({ title, icon, url }) => {
                const Icon = iconComponents[icon];
                return (
                  <Link
                    key={title}
                    to={url}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-blue-400"
                  >
                    <Icon size={20} />
                    <span className="text-[15px] font-medium">{title}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-1">
              {MOVIE_LISTS.map(({ title, icon, url }) => {
                const Icon = iconComponents[icon];
                return (
                  <Link
                    key={title}
                    to={url}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-4 rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-blue-400"
                  >
                    <Icon size={20} />
                    <span className="text-[15px] font-medium">{title}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
};
