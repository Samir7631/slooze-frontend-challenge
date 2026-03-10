"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="rounded-md border border-gray-700 px-3 py-2 text-sm text-gray-300">
        Theme
      </button>
    );
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="rounded-md border border-gray-700 bg-transparent px-3 py-2 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
    >
      {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
}