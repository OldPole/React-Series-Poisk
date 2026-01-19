import { Skeleton } from '@/core/ui/skeleton';

export const MovieSectionSkeleton = () => (
  <div className="space-y-4 px-4 md:px-8">
    <Skeleton className="h-8 w-48 bg-zinc-900" />
    <div className="flex gap-4">
      {[...Array(6)].map((_, i) => (
        <Skeleton
          key={i}
          className="hidden aspect-2/3 flex-1 rounded-md bg-zinc-900 first:block lg:block"
        />
      ))}
    </div>
  </div>
);
