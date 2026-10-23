export interface WatchOptions {
  link: string;
  stream: string[];
  free: string[];
  rent: string[];
  buy: string[];
}

export type WatchProviders = Record<string, WatchOptions>;
