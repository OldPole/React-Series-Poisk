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
    title: 'ТОП 100 популярных фильмов',
    icon: 'AutoAwesome' as IconName,
    url: '/popular',
  },
  {
    title: 'ТОП 250 лучших фильмов',
    icon: 'StarPurple500' as IconName,
    url: '/best',
  },
  { title: 'Вампиры', icon: 'Bloodtype' as IconName, url: '/vampire' },
  { title: 'Комиксы', icon: 'MenuBook' as IconName, url: '/comics' },
  { title: 'Семейный', icon: 'FamilyRestroom' as IconName, url: '/family' },
  {
    title: 'Романтика',
    icon: 'VolunteerActivism' as IconName,
    url: '/romantic',
  },
  { title: 'Зомби', icon: 'MoodBad' as IconName, url: '/zombie' },
  { title: 'Катастрофы', icon: 'Pool' as IconName, url: '/catastrophe' },
  {
    title: 'Популярные сериалы',
    icon: 'LiveTv' as IconName,
    url: '/popular-serials',
  },
];

export const MOVIE_LISTS: MenuItem[] = [
  { title: 'Фильмы', icon: 'LocalMovies' as IconName, url: '/films' },
  { title: 'Сериалы', icon: 'Reorder' as IconName, url: '/serials' },
  { title: 'Мультфильмы', icon: 'Fort' as IconName, url: '/cartoons' },
];
