import { Link } from "@tanstack/react-router";

function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-2xl font-extrabold">Page not found</h1>
      <Link to="/" className="mt-6 inline-block rounded-md bg-white px-8 py-2 text-sm shadow-md hover:opacity-70 dark:bg-blue-900">
        Back to all countries
      </Link>
    </div>
  );
}

export default NotFound;
