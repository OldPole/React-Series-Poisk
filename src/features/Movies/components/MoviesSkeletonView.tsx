import type { MovieSectionConfig } from '../types/movies.types';
import { MovieSectionSkeleton } from './MovieSectionSkeleton';

interface MoviesViewSkeletonProps {
  sections: MovieSectionConfig[];
}

export const MoviesSkeletonView = ({ sections }: MoviesViewSkeletonProps) => {
  const skeletonCount = sections.length;

  return (
    <div className="flex flex-col gap-6 overflow-x-hidden py-10">
      {[...Array(skeletonCount)].map((_, index) => (
        <MovieSectionSkeleton key={index} />
      ))}
    </div>
  );
};
