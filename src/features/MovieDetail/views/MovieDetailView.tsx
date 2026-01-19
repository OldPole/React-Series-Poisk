import { Link, useParams } from '@tanstack/react-router';
import { ArrowLeft, Film, Globe } from 'lucide-react';
import { Button } from '@/core/ui/button';

import { ErrorMessage } from '../components/ErrorMessage';
import { MovieDetailSpinner } from '../components/MovieDetailSpinner';
import { useMovieDetail } from '../hooks/useMovieDeatail';
import { movieDetailRoute } from '../moviesDetail.routes';
import type { RelatedMovie, Staff } from '../types/movies.types';

export const MovieDetailView = () => {
  const { movieId } = useParams({ from: movieDetailRoute.id });
  const { movie, staff, related, isPending, isError } = useMovieDetail(movieId);

  const directors =
    staff?.filter(
      (employee: Staff) => employee.professionText === 'Режиссеры',
    ) || [];

  const actors =
    staff
      ?.filter((employee: Staff) => employee.professionText === 'Актеры')
      .slice(0, 10) || [];

  if (isPending) return <MovieDetailSpinner />;

  if (isError || !movie) return <ErrorMessage />;

  return (
    <div className="container mx-auto mt-22.5 px-4 pb-20">
      <Button
        variant="ghost"
        className="mb-6 cursor-pointer pl-0 text-zinc-400 transition-colors duration-300 hover:bg-black hover:text-red-600"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="mr-2 h-5 w-5" /> Назад
      </Button>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img
            src={movie.posterUrl}
            alt={movie.nameRu}
            className="w-full rounded-2xl"
          />
        </div>

        <div className="lg:col-span-5">
          <div>
            <h1 className="mb-4 text-5xl">{movie.nameRu}</h1>
            <p className="mb-2 text-xl text-zinc-500">{movie.year}</p>
          </div>

          <div className="grid grid-cols-1 gap-y-4 pb-8 sm:grid-cols-2 md:text-base">
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500">Страна</span>
              <span>
                {movie.countries.map(country => country.country).join(', ')}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500">Жанры</span>
              <span className="capitalize">
                {movie.genres.map(g => g.genre).join(', ')}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500">Режиссер</span>
              <span>{directors[0]?.nameRu}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500">Время</span>
              <span>{movie.filmLength || '-'} мин</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Описание</h3>
            <p className="leading-relaxed text-zinc-400">
              {movie.description || 'Описание отсутствует'}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {movie.webUrl && (
              <Button
                className="bg-zinc-800 text-white hover:bg-zinc-700"
                asChild
              >
                <a href={movie.webUrl} target="_blank">
                  <Globe className="mr-2 h-4 w-4" /> Кинопоиск
                </a>
              </Button>
            )}
            {movie.imdbId && (
              <Button
                className="bg-zinc-800 text-white hover:bg-zinc-700"
                asChild
              >
                <a
                  href={`https://www.imdb.com/title/${movie.imdbId}`}
                  target="_blank"
                >
                  <Film className="mr-2 h-4 w-4" /> IMDB
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-6 border-l-4 border-red-600 pl-4 text-xl font-bold">
            В главных ролях
          </h3>
          <div className="flex flex-col gap-3">
            {actors.length ? (
              actors.map((actor: Staff) => (
                <Link
                  key={actor.staffId}
                  to="/"
                  params={{ staffId: String(actor.staffId) }}
                  className="text-sm text-zinc-400 transition-colors hover:text-red-500 md:text-base"
                >
                  {actor.nameRu}
                </Link>
              ))
            ) : (
              <span className="text-sm text-zinc-400">
                Нет данных об актерах
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="mb-8 text-center text-3xl font-bold">Смотреть онлайн</h2>
        <div className="mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl">
          {/* <VideoPlayer id={movieId} /> */}
          <div className="flex h-full w-full items-center justify-center text-zinc-700">
            [Плеер загружается...]
          </div>
        </div>
      </div>

      {related && (
        <div className="mt-10">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Сиквелы и приквелы
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {related.map((item: RelatedMovie) => (
              <Link
                key={item.filmId}
                to="/movie/$movieId"
                params={{ movieId: String(item.filmId) }}
                className="group flex flex-col items-center md:w-45"
              >
                <div className="relative w-full overflow-hidden rounded-xl transition-all">
                  <img
                    src={item.posterUrlPreview}
                    alt={item.nameRu}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="mt-3 line-clamp-2 text-center text-sm font-medium text-white transition-colors group-hover:text-red-600">
                  {item.nameRu}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
