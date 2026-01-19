export type IconName =
  | 'AutoAwesome'
  | 'StarPurple500'
  | 'Bloodtype'
  | 'MenuBook'
  | 'FamilyRestroom'
  | 'VolunteerActivism'
  | 'MoodBad'
  | 'Pool'
  | 'LiveTv'
  | 'LocalMovies'
  | 'Reorder'
  | 'Fort';

export interface MenuItem {
  title: string;
  icon: IconName;
  url: string;
  value: string;
}
