import { Link, getRouteApi, useRouter } from "@tanstack/react-router";
import { useCountries } from "../hooks/useCountries";
import { formatNumber, joinNames } from "../utils/format";
import InfoRow from "../components/InfoRow";
import StatusMessage from "../components/StatusMessage";
import { ArrowLeftIcon } from "../components/Icons";

const route = getRouteApi("/country/$code");

function CountryPage() {
  const { code } = route.useParams();
  const router = useRouter();
  const { data: countries, isPending, isError, refetch } = useCountries();

  function goBack() {
    if (window.history.length > 1) {
      router.history.back();
    } else {
      router.navigate({ to: "/" });
    }
  }

  const backButton = (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-2 text-sm shadow-md hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:bg-blue-900"
    >
      <ArrowLeftIcon className="h-4 w-4" />
      Back
    </button>
  );

  if (isPending) {
    return (
      <div>
        {backButton}
        <StatusMessage message="Loading country..." />
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        {backButton}
        <StatusMessage
          message="Something went wrong while loading the country."
          actionLabel="Try again"
          onAction={() => refetch()}
        />
      </div>
    );
  }

  const country = countries.find((item) => item.alpha3Code === code);

  if (!country) {
    return (
      <div>
        {backButton}
        <StatusMessage message="Country not found." />
      </div>
    );
  }

  const borderCountries = (country.borders ?? [])
    .map((borderCode) => countries.find((item) => item.alpha3Code === borderCode))
    .filter((item) => item !== undefined);

  return (
    <div>
      {backButton}

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:items-center lg:gap-24">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name}`}
          className="w-full rounded-sm shadow-md"
        />

        <div>
          <h1 className="text-2xl font-extrabold lg:text-3xl">{country.name}</h1>

          <div className="mt-6 grid gap-10 sm:grid-cols-2 sm:gap-6">
            <ul className="flex flex-col gap-2">
              <InfoRow label="Native Name" value={country.nativeName} />
              <InfoRow label="Population" value={formatNumber(country.population)} />
              <InfoRow label="Region" value={country.region} />
              <InfoRow label="Sub Region" value={country.subregion || "N/A"} />
              <InfoRow label="Capital" value={country.capital || "N/A"} />
            </ul>

            <ul className="flex flex-col gap-2">
              <InfoRow label="Top Level Domain" value={country.topLevelDomain.join(", ") || "N/A"} />
              <InfoRow label="Currencies" value={joinNames(country.currencies)} />
              <InfoRow label="Languages" value={joinNames(country.languages)} />
            </ul>
          </div>

          {borderCountries.length > 0 && (
            <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-start">
              <h2 className="whitespace-nowrap py-1 font-semibold">Border Countries:</h2>
              <ul className="flex flex-wrap gap-2">
                {borderCountries.map((border) => (
                  <li key={border.alpha3Code}>
                    <Link
                      to="/country/$code"
                      params={{ code: border.alpha3Code }}
                      className="block rounded-sm bg-white px-6 py-1 text-xs font-light shadow-sm hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:bg-blue-900"
                    >
                      {border.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
