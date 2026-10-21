import { SearchIcon } from "./Icons";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full md:max-w-md">
      <SearchIcon className="absolute left-8 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white" />
      <input
        type="search"
        aria-label="Search for a country"
        placeholder="Search for a country..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md bg-white py-4 pl-20 pr-4 text-sm shadow-sm outline-none placeholder:text-gray-400 focus-visible:outline-2 focus-visible:outline-gray-400 dark:bg-blue-900 dark:placeholder:text-white"
      />
    </div>
  );
}

export default SearchBar;
