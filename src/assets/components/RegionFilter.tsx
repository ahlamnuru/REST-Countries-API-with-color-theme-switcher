import { useEffect, useRef, useState } from "react";
import { regions } from "../data/regions";
import { ChevronDownIcon } from "./Icons";

type RegionFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

function RegionFilter({ value, onChange }: RegionFilterProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function choose(region: string) {
    onChange(region);
    setOpen(false);
  }

  return (
    <div ref={containerRef} className="relative w-52">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-md bg-white px-6 py-4 text-sm shadow-sm focus-visible:outline-2 focus-visible:outline-gray-400 dark:bg-blue-900"
      >
        {value || "Filter by Region"}
        <ChevronDownIcon className="h-3 w-3" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full rounded-md bg-white py-2 shadow-md dark:bg-blue-900">
          <li>
            <button
              type="button"
              onClick={() => choose("")}
              className="w-full px-6 py-1.5 text-left text-sm hover:bg-gray-50 dark:hover:bg-blue-950"
            >
              All Regions
            </button>
          </li>
          {regions.map((region) => (
            <li key={region}>
              <button
                type="button"
                onClick={() => choose(region)}
                className={`w-full px-6 py-1.5 text-left text-sm hover:bg-gray-50 dark:hover:bg-blue-950 ${
                  value === region ? "font-extrabold" : ""
                }`}
              >
                {region}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RegionFilter;
