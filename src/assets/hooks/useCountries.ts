import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "../utils/fetchCountries";

export function useCountries() {
  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    staleTime: Infinity,
  });
}
