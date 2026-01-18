import type { Movie } from '@/core/api/kinopoiskApi.types';

export interface DetailedMovie extends Movie {
  description: string | null;
  countries: { country: string }[];
  genres: { genre: string }[];
  filmLength: number;
  webUrl: string;
  imdbId: string | null;
}

export interface Staff {
  staffId: number;
  nameRu: string;
  posterUrl: string;
  professionText: string;
}

export interface RelatedMovie {
  filmId: number;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  relationType: string;
}

export interface moviesContentReturn {
  isPending: boolean;
  isError: boolean;
  data: {
    popular?: { items: Movie[] };
    best?: { items: Movie[] };
    films?: { items: Movie[] };
    serials?: { items: Movie[] };
    cartoons?: { items: Movie[] };
  };
}
