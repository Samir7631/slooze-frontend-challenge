"use client";

import Header from "@/components/layout/header";
import RoleGuard from "@/guards/role-guard";
import { ROLES } from "@/lib/constants/roles";

export default function ProductsPage() {
  return (
    <RoleGuard allowedRoles={[ROLES.MANAGER, ROLES.STORE_KEEPER]}>
      <div className="min-h-screen bg-black text-white">
        <Header
          title="Products"
          subtitle="Manage and monitor available commodities"
        />

        <div className="p-6">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h2 className="text-xl font-semibold">Products Page</h2>
            <p className="mt-2 text-gray-400">
              Both Manager and Store Keeper can access this page.
            </p>
          </div>
        </div>
      </div>
    </RoleGuard>
  );
}