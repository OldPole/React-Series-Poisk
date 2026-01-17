export interface Movie {
  kinopoiskId: number;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingKinopoisk?: number;
  year?: number;
}

export interface MovieResponse {
  total: number;
  items: Movie[];
}
