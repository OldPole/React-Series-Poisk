import { useQuery } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { Loader2, Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { apiFetch } from '@/core/api/kinopoiskApi';
import type { Movie } from '@/core/api/kinopoiskApi.types';
import { Input } from '@/core/ui/input';

export const Search = () => {
  const [query, setQuery] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data, isFetching } = useQuery({
    queryKey: ['search', query],
    queryFn: () =>
      apiFetch<{ items: Movie[] }>(`/v2.2/films?keyword=${query}&page=1`),
    enabled: query.length > 0,
    staleTime: 500,
  });

  return (
    <div className="relative w-75">
      <div>
        <SearchIcon
          size={18}
          className="absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500"
        />
        <Input
          value={query}
          onChange={e => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          placeholder="Поиск фильмов..."
          className="border-zinc-800 pl-10"
        />
        {isFetching && (
          <Loader2 className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 animate-spin text-zinc-500" />
        )}
      </div>

      {isOpen && !!data && (
        <div className="absolute top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl">
          <div className="max-h-100 overflow-y-auto p-1">
            {data.items.map(({ kinopoiskId, posterUrlPreview, nameRu }) => (
              <Link
                key={kinopoiskId}
                to="/movie/$movieId"
                params={{ movieId: String(kinopoiskId) }}
                className="flex w-full items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-zinc-900"
              >
                <img
                  src={posterUrlPreview}
                  className="h-12 w-9 shrink-0 rounded object-cover"
                  alt={nameRu}
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-zinc-200">
                    {nameRu}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
