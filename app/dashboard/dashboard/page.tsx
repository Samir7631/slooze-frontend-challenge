"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import RoleGuard from "@/guards/role-guard";
import { ROLES } from "@/lib/constants/roles";
import { dashboardService } from "@/features/dashboard/service/dashboard.service";
import StatsCard from "@/features/dashboard/component/stats-card";
import { DashboardStats } from "@/features/dashboard/type/dashboard.type";

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await dashboardService.getStats();
        setStats(data);
      } catch (error) {
        console.error("Failed to load dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, []);

  return (
    <RoleGuard allowedRoles={[ROLES.MANAGER]}>
      <div className="min-h-screen bg-black text-white">
        <Header
          title="Dashboard"
          subtitle="Manager overview of commodities and stock insights"
        />

        <div className="p-6">
          {loading || !stats ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <div className="h-32 animate-pulse rounded-xl bg-gray-900" />
              <div className="h-32 animate-pulse rounded-xl bg-gray-900" />
              <div className="h-32 animate-pulse rounded-xl bg-gray-900" />
              <div className="h-32 animate-pulse rounded-xl bg-gray-900" />
            </div>
          ) : (
            <>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <StatsCard
                  title="Total Products"
                  value={stats.totalProducts}
                  description="Total commodities currently listed"
                />
                <StatsCard
                  title="Categories"
                  value={stats.totalCategories}
                  description="Unique product categories"
                />
                <StatsCard
                  title="Low Stock"
                  value={stats.lowStockCount}
                  description="Items that need attention soon"
                />
                <StatsCard
                  title="Out of Stock"
                  value={stats.outOfStockCount}
                  description="Items unavailable right now"
                />
              </div>

              <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-6">
                <h2 className="text-xl font-semibold">Stock Summary</h2>
                <p className="mt-2 text-gray-400">
                  This dashboard gives the manager a quick overview of total
                  commodities, category distribution, low stock alerts, and
                  unavailable inventory.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </RoleGuard>
  );
}
