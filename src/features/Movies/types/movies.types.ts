import type { Movie, MovieResponse } from '@/core/api/kinopoiskApi.types';

export interface moviesContentData {
  popular: MovieResponse | undefined;
  best: MovieResponse | undefined;
  films: MovieResponse | undefined;
  serials: MovieResponse | undefined;
  cartoons: MovieResponse | undefined;
}

export interface moviesContentReturn {
  isPending: boolean;
  isError: boolean;
  data: moviesContentData;
}

export interface MovieSectionConfig {
  title: string;
  url: string;
  items: Movie[] | undefined;
}
