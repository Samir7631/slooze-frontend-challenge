import ProtectedRoute from "@/guards/protected-route";
import Sidebar from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-black">
        <Sidebar />
        <main className="flex-1 bg-black">{children}</main>
      </div>
    </ProtectedRoute>
  );
}