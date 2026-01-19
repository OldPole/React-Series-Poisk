import { Link } from '@tanstack/react-router';
import type { Movie } from '@/core/api/kinopoiskApi.types';

export const MovieCard = ({ kinopoiskId, posterUrlPreview, nameRu }: Movie) => (
  <Link
    to="/movie/$movieId"
    params={{ movieId: String(kinopoiskId) }}
    className="group flex w-full flex-col gap-2"
  >
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={posterUrlPreview}
        alt={nameRu}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3 className="truncate text-sm font-bold transition-colors duration-300 group-hover:text-red-500">
      {nameRu}
    </h3>
  </Link>
);
