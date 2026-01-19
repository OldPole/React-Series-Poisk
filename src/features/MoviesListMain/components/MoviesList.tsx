import { useNavigate } from '@tanstack/react-router';
import type { Movie } from '@/core/api/kinopoiskApi.types';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/core/ui/pagination';

import { MovieCard } from './MovieCard';

interface MoviesListProps {
  movies: Movie[];
  page: number;
  totalPages: number;
}

export const MoviesList = ({ movies, page, totalPages }: MoviesListProps) => {
  const navigate = useNavigate();

  const handlePageChange = (newPage: number) => {
    navigate({
      to: '.',
      search: { page: newPage },
    });
  };

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movies.map(movie => (
          <MovieCard key={movie.kinopoiskId} {...movie} />
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                page === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'
              }
              onClick={() => page > 1 && handlePageChange(page - 1)}
            />
          </PaginationItem>

          {page > 2 && (
            <PaginationItem>
              <PaginationLink
                onClick={() => handlePageChange(1)}
                className="cursor-pointer"
              >
                1
              </PaginationLink>
            </PaginationItem>
          )}

          {page > 3 && <PaginationEllipsis />}

          {page > 1 && (
            <PaginationItem>
              <PaginationLink
                onClick={() => handlePageChange(page - 1)}
                className="cursor-pointer"
              >
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink isActive className="font-medium text-black">
              {page}
            </PaginationLink>
          </PaginationItem>

          {page < totalPages && (
            <PaginationItem>
              <PaginationLink
                onClick={() => handlePageChange(page + 1)}
                className="cursor-pointer"
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {page < totalPages - 2 && <PaginationEllipsis />}

          {page < totalPages - 1 && (
            <PaginationItem>
              <PaginationLink
                onClick={() => handlePageChange(totalPages)}
                className="cursor-pointer"
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              className={
                page >= totalPages
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
              onClick={() => page < totalPages && handlePageChange(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
