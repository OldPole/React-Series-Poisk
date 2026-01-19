import { ArrowLeft } from 'lucide-react';
import { Button } from '@/core/ui/button';
import { MovieDetailSpinner } from '@/features/MovieDetail/components/MovieDetailSpinner';
import { MoviesList } from '@/features/MoviesListTop/components/MoviesList';

import { ErrorMessage } from '../components/ErrorMessage';
import { SelectMovies } from '../components/SelectMovies';
import { useMoviesMain } from '../hooks/useMoviesMain';

export const MoviesListMainView = () => {
  const {
    moviesData,
    filtersData,
    isLoading,
    isError,
    movieType,
    params,
    updateFilters,
  } = useMoviesMain();

  if (isError) return <ErrorMessage />;

  if (isLoading) return <MovieDetailSpinner />;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.history.back()}
          className="cursor-pointer transition-colors duration-300 hover:bg-black hover:text-red-600"
        >
          <ArrowLeft size={24} />
        </Button>
        <h1 className="text-2xl font-black uppercase">{movieType?.title}</h1>
      </div>

      {filtersData && (
        <SelectMovies
          filters={filtersData}
          params={params}
          onUpdate={updateFilters}
        />
      )}

      {moviesData && (
        <MoviesList
          movies={moviesData.items}
          page={params.page}
          totalPages={moviesData.totalPages}
        />
      )}
    </div>
  );
};
