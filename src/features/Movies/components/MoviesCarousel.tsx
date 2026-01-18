import { Link } from '@tanstack/react-router';
import type { Movie } from '@/core/api/kinopoiskApi.types';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/core/ui/carousel';

interface MoviesCarouselProps {
  title: string;
  url: string;
  items: Movie[];
}

export const MoviesCarousel = ({ title, url, items }: MoviesCarouselProps) => {
  return (
    <section className="space-y-4 py-4">
      <div className="px-4 md:px-8">
        <Link
          to={url}
          className="text-2xl font-bold text-white transition-colors hover:text-red-600"
        >
          {title}
        </Link>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="md:px-8"
      >
        <CarouselContent>
          {items.map(({ kinopoiskId, posterUrlPreview, nameRu }) => (
            <CarouselItem key={kinopoiskId} className="xl:basis-1/6">
              <Link
                to="/movie/$movieId"
                params={{ movieId: String(kinopoiskId) }}
                className="group space-y-3"
              >
                <div className="aspect-[2/3]">
                  <img
                    src={posterUrlPreview}
                    alt={nameRu}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <p className="truncate font-medium transition-colors group-hover:text-red-600">
                  {nameRu}
                </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="md:block">
          <CarouselPrevious className="left-10 bg-black/50 text-white hover:text-red-600" />
          <CarouselNext className="right-10 bg-black/50 text-white hover:text-red-600" />
        </div>
      </Carousel>
    </section>
  );
};
