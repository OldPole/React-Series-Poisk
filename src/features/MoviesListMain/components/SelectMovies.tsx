import { X } from 'lucide-react';
import { Button } from '@/core/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/core/ui/select';

import type {
  FiltersResponse,
  FilterState,
} from '../types/moviesListMain.types';

interface SelectMoviesProps {
  filters: FiltersResponse;
  params: FilterState;
  onUpdate: (updates: Partial<FilterState>) => void;
}

export const SelectMovies = ({
  filters,
  params,
  onUpdate,
}: SelectMoviesProps) => {
  const years = Array.from({ length: 30 }, (_, i) =>
    String(new Date().getFullYear() - i),
  );

  const clearFilters = () => {
    onUpdate({ countries: '', genreId: '', year: '', order: 'RATING' });
  };

  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <Select value={params.order} onValueChange={order => onUpdate({ order })}>
        <SelectTrigger className="w-45 cursor-pointer border-zinc-800 bg-zinc-900">
          <SelectValue placeholder="Рейтинг" />
        </SelectTrigger>
        <SelectContent className="border-zinc-800 bg-zinc-900 text-white">
          <SelectItem className="cursor-pointer" value="RATING">
            По рейтингу
          </SelectItem>
          <SelectItem className="cursor-pointer" value="NUM_VOTE">
            По оценкам
          </SelectItem>
        </SelectContent>
      </Select>

      <Select
        value={params.countries}
        onValueChange={countries => onUpdate({ countries })}
      >
        <SelectTrigger className="w-45 cursor-pointer border-zinc-800 bg-zinc-900">
          <SelectValue placeholder="Страна" />
        </SelectTrigger>
        <SelectContent className="border-zinc-800 bg-zinc-900 text-white">
          {filters.countries.map(country => (
            <SelectItem
              className="cursor-pointer"
              key={country.id}
              value={String(country.id)}
            >
              {country.country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={params.genreId}
        onValueChange={genreId => onUpdate({ genreId })}
      >
        <SelectTrigger className="w-45 cursor-pointer border-zinc-800 bg-zinc-900">
          <SelectValue placeholder="Жанр" />
        </SelectTrigger>
        <SelectContent className="border-zinc-800 bg-zinc-900 text-white">
          {filters.genres.map(genre => (
            <SelectItem
              className="cursor-pointer"
              key={genre.id}
              value={String(genre.id)}
            >
              {genre.genre}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={params.year} onValueChange={year => onUpdate({ year })}>
        <SelectTrigger className="w-45 cursor-pointer border-zinc-800 bg-zinc-900">
          <SelectValue placeholder="Год" />
        </SelectTrigger>
        <SelectContent className="border-zinc-800 bg-zinc-900 text-white">
          {years.map(year => (
            <SelectItem className="cursor-pointer" key={year} value={year}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        variant="outline"
        size="icon"
        onClick={clearFilters}
        className="hover: cursor-pointer border-zinc-800 bg-black transition-colors duration-300 hover:border-red-600 hover:bg-black hover:text-red-600"
      >
        <X size={20} />
      </Button>
    </div>
  );
};
