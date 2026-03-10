import ProtectedRoute from "@/guards/protected-route";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-gray-100 text-black dark:bg-black dark:text-white">
        <Sidebar />
        <main className="flex-1 bg-gray-100 dark:bg-black">{children}</main>
      </div>
    </ProtectedRoute>
  );
}
