import {
  BookOpen,
  Castle,
  Clapperboard,
  Droplets,
  Heart,
  List,
  Skull,
  Sparkles,
  Star,
  Tv,
  Users,
  Waves,
} from 'lucide-react';

import { type IconName, type MenuItem } from './constants.types';

export const iconComponents = {
  AutoAwesome: Sparkles,
  StarPurple500: Star,
  Bloodtype: Droplets,
  MenuBook: BookOpen,
  FamilyRestroom: Users,
  VolunteerActivism: Heart,
  MoodBad: Skull,
  Pool: Waves,
  LiveTv: Tv,
  LocalMovies: Clapperboard,
  Reorder: List,
  Fort: Castle,
};

export const TOP_LISTS: MenuItem[] = [
  {
    title: 'ТОП 100 популярных',
    icon: 'AutoAwesome',
    url: '/movies/popular',
    value: 'TOP_POPULAR_ALL',
  },
  {
    title: 'ТОП 250 лучших',
    icon: 'StarPurple500',
    url: '/movies/best',
    value: 'TOP_250_MOVIES',
  },
  {
    title: 'Комиксы',
    icon: 'MenuBook',
    url: '/movies/comics',
    value: 'COMICS_THEME',
  },
  {
    title: 'Семейный',
    icon: 'FamilyRestroom',
    url: '/movies/family',
    value: 'FAMILY',
  },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv',
    url: '/movies/popular-serials',
    value: 'POPULAR_SERIES',
  },
];

export const MOVIE_LISTS: MenuItem[] = [
  {
    title: 'Фильмы',
    icon: 'LocalMovies' as IconName,
    url: '/films',
    value: 'FILM',
  },
  {
    title: 'Сериалы',
    icon: 'Reorder' as IconName,
    url: '/serials',
    value: 'TV_SERIES',
  },
  {
    title: 'Мультфильмы',
    icon: 'Fort' as IconName,
    url: '/cartoons',
    value: 'FILM',
  },
];
