import { Outlet } from "@tanstack/react-router";
import Header from "./Header";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-950 dark:bg-blue-950 dark:text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-6 md:px-10 md:py-12">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
