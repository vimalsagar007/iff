export type Era = '1857-1885' | '1885-1919' | '1919-1939' | '1939-1947';

export type LanguageCode = 'en' | 'hi' | 'bn' | 'ta' | 'te' | 'mr' | 'pa' | 'gu';

export interface LanguageOption {
  code: LanguageCode;
  name: string;
  nativeName: string;
  speechCode: string;
  region: string;
  flagEmblem?: string;
}

export type RoleCategory = 
  | 'Revolutionary'
  | 'National Leader'
  | 'Social Reformer & Leader'
  | 'Armed Resistance'
  | 'Pioneer Martyr';

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface FighterLocalization {
  name: string;
  titleOrEpithet?: string;
  region?: string;
  contribution: string;
  bio: string;
  famousQuote?: string;
  events?: string[];
}

export interface FreedomFighter {
  id: string;
  name: string;
  titleOrEpithet?: string;
  years: string;
  birthYear: number;
  deathYear: number;
  region: string;
  contribution: string;
  events: string[];
  bio: string;
  photo_url: string;
  famousQuote?: string;
  era: Era;
  role: RoleCategory;
  keyMilestones?: Milestone[];
  translations?: Partial<Record<LanguageCode, FighterLocalization>>;
}

export interface StructuredFighterItem {
  name: string;
  years: string;
  region: string;
  contribution: string;
  events: string[];
  bio: string;
  photo_url: string;
}

export interface FreedomFightersOutput {
  fighters: StructuredFighterItem[];
}

export type ViewMode = 'grid' | 'timeline' | 'regions' | 'json';

