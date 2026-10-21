import type { Country } from "../types";

export async function fetchCountries(): Promise<Country[]> {
  const response = await fetch(`${import.meta.env.BASE_URL}data.json`);

  if (!response.ok) {
    throw new Error("Could not load the countries");
  }

  return response.json();
}
