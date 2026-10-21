import { useState } from "react";
import type { Theme } from "../types";
import { applyTheme, getInitialTheme, saveTheme } from "../utils/theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    saveTheme(next);
  }

  return { theme, toggleTheme };
}
