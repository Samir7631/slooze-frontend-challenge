"use client";

import { useAuthStore } from "@/store/auth-store";
import ThemeToggle from "@/components/layout/theme-toggle";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  const { user } = useAuthStore();

  return (
    <header className="border-b border-gray-200 bg-white px-6 py-4 text-black dark:border-gray-800 dark:bg-gray-950 dark:text-white">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && (
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="text-sm text-gray-700 dark:text-gray-300">
            Logged in as{" "}
            <span className="font-semibold text-black dark:text-white">
              {user?.name}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}