export type Country = {
  name: string;
  nativeName: string;
  capital?: string;
  region: string;
  subregion: string;
  population: number;
  topLevelDomain: string[];
  currencies?: { code: string; name: string; symbol: string }[];
  languages: { name: string }[];
  borders?: string[];
  alpha3Code: string;
  flags: { svg: string; png: string };
};

export type Theme = "light" | "dark";

export type HomeSearch = {
  q?: string;
  region?: string;
};
