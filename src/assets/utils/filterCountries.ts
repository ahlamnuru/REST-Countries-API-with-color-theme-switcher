import type { Country } from "../types";

export function filterCountries(countries: Country[], search: string, region: string): Country[] {
  const term = search.trim().toLowerCase();

  return countries.filter((country) => {
    const matchesName = country.name.toLowerCase().includes(term);
    const matchesRegion = region === "" || country.region === region;

    return matchesName && matchesRegion;
  });
}
