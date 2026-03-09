"use client";

import { useAuthStore } from "@/store/auth-store";

type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  const { user } = useAuthStore();

  return (
    <header className="border-b border-gray-800 bg-gray-950 px-6 py-4 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-gray-400">{subtitle}</p>}
        </div>

        <div className="text-sm text-gray-300">
          Logged in as <span className="font-semibold text-white">{user?.name}</span>
        </div>
      </div>
    </header>
  );
}