import { ArrowLeft } from 'lucide-react';
import { Button } from '@/core/ui/button';
import { MovieDetailSpinner } from '@/features/MovieDetail/components/MovieDetailSpinner';

import { ErrorMessage } from '../components/ErrorMessage';
import { MoviesList } from '../components/MoviesList';
import { useMoviesCategory } from '../hooks/useMoviesCategory';

export const MoviesListTopView = () => {
  const { data, isLoading, isError, currentList, currentPage } =
    useMoviesCategory();

  if (isLoading) return <MovieDetailSpinner />;

  if (isError || !currentList) return <ErrorMessage />;

  return (
    <div className="container mx-auto px-4 pt-12 pb-12">
      <div className="mb-8 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.history.back()}
          className="cursor-pointer text-zinc-400 transition-colors duration-300 hover:bg-black hover:text-red-600"
        >
          <ArrowLeft size={24} />
        </Button>
        <h1 className="text-2xl font-black uppercase">{currentList.title}</h1>
      </div>

      {data && (
        <MoviesList
          movies={data.items}
          page={currentPage}
          totalPages={data.totalPages}
        />
      )}
    </div>
  );
};
