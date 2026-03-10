"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MENU_ITEMS } from "@/lib/constants/menu";
import { useAuthStore } from "@/store/auth-store";
import { storage } from "@/lib/utils/storage";
import { ROUTES } from "@/lib/constants/routes";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const filteredMenu = MENU_ITEMS.filter((item) =>
    user ? item.roles.includes(user.role) : false
  );

  const handleLogout = () => {
    logout();
    storage.remove("auth");
    router.replace(ROUTES.LOGIN);
  };

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white text-black dark:border-gray-800 dark:bg-gray-950 dark:text-white">
      <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
        <h2 className="text-xl font-bold">Slooze CMS</h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {user?.name} ({user?.role})
        </p>
      </div>

      <nav className="flex-1 px-4 py-4">
        <div className="space-y-2">
          {filteredMenu.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-gray-200 p-4 dark:border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}