import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 text-white">
      <h1 className="text-3xl font-bold">Access Denied</h1>
      <p className="mt-3 text-center text-gray-300">
        You do not have permission to access this page.
      </p>

      <Link
        href={ROUTES.PRODUCTS}
        className="mt-6 rounded-md bg-white px-4 py-2 font-medium text-black"
      >
        Go to Products
      </Link>
    </main>
  );
}
