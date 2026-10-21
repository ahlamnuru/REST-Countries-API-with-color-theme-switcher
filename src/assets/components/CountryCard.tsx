import { Link } from "@tanstack/react-router";
import type { Country } from "../types";
import { formatNumber } from "../utils/format";
import InfoRow from "./InfoRow";

type CountryCardProps = {
  country: Country;
};

function CountryCard({ country }: CountryCardProps) {
  return (
    <li className="mx-auto w-full max-w-66 sm:max-w-none">
      <Link
        to="/country/$code"
        params={{ code: country.alpha3Code }}
        className="block h-full overflow-hidden rounded-md bg-white shadow-sm hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 dark:bg-blue-900"
      >
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name}`}
          loading="lazy"
          className="h-40 w-full object-cover"
        />
        <div className="p-6 pb-10">
          <h2 className="text-lg font-extrabold">{country.name}</h2>
          <ul className="mt-4 flex flex-col gap-1 text-sm">
            <InfoRow label="Population" value={formatNumber(country.population)} />
            <InfoRow label="Region" value={country.region} />
            <InfoRow label="Capital" value={country.capital || "N/A"} />
          </ul>
        </div>
      </Link>
    </li>
  );
}

export default CountryCard;
