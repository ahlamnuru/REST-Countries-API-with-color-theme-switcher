import { getRouteApi } from "@tanstack/react-router";
import { useCountries } from "../hooks/useCountries";
import { filterCountries } from "../utils/filterCountries";
import SearchBar from "../components/SearchBar";
import RegionFilter from "../components/RegionFilter";
import CountryCard from "../components/CountryCard";
import StatusMessage from "../components/StatusMessage";

const route = getRouteApi("/");

function HomePage() {
  const { q = "", region = "" } = route.useSearch();
  const navigate = route.useNavigate();
  const { data: countries, isPending, isError, refetch } = useCountries();

  function setSearch(value: string) {
    navigate({ search: (prev) => ({ ...prev, q: value || undefined }), replace: true });
  }

  function setRegion(value: string) {
    navigate({ search: (prev) => ({ ...prev, region: value || undefined }), replace: true });
  }

  if (isPending) {
    return <StatusMessage message="Loading countries..." />;
  }

  if (isError) {
    return (
      <StatusMessage
        message="Something went wrong while loading the countries."
        actionLabel="Try again"
        onAction={() => refetch()}
      />
    );
  }

  const visibleCountries = filterCountries(countries, q, region);

  return (
    <div>
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <SearchBar value={q} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>

      {visibleCountries.length === 0 ? (
        <StatusMessage message="No countries found." />
      ) : (
        <ul className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-12 md:gap-16">
          {visibleCountries.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default HomePage;
