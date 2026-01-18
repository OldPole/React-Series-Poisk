import { ErrorMessage } from '../components/ErrorMessage';
import { MoviesCarousel } from '../components/MoviesCarousel';
import { MoviesSkeletonView } from '../components/MoviesSkeletonView';
import { useMoviesPageContent } from '../hooks/useMoviesQueries';
import type { MovieSectionConfig } from '../types/movies.types';

export const MoviesView = () => {
  const { isPending, isError, data } = useMoviesPageContent(1);

  const sections: MovieSectionConfig[] = [
    { title: 'Популярные фильмы', url: '/popular', items: data.popular?.items },
    { title: 'Лучшие фильмы', url: '/best', items: data.best?.items },
    { title: 'Фильмы', url: '/films', items: data.films?.items },
    { title: 'Сериалы', url: '/serials', items: data.serials?.items },
    { title: 'Мультфильмы', url: '/cartoons', items: data.cartoons?.items },
  ];

  if (isError) return <ErrorMessage />;

  if (isPending) return <MoviesSkeletonView sections={sections} />;

  return (
    <div className="flex flex-col gap-6 overflow-x-hidden py-6">
      {sections.map(section => (
        <div key={section.title}>
          {section.items && (
            <MoviesCarousel
              title={section.title}
              url={section.url}
              items={section.items}
            />
          )}
        </div>
      ))}
    </div>
  );
};
