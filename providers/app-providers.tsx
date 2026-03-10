"use client";

import ThemeProvider from "@/providers/theme-provider";

export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}