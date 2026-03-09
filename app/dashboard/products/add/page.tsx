"use client";

import Header from "@/components/layout/header";
import RoleGuard from "@/guards/role-guard";
import { ROLES } from "@/lib/constants/roles";
import ProductForm from "@/features/product/components/product-form";

export default function AddProductPage() {
  return (
    <RoleGuard allowedRoles={[ROLES.MANAGER, ROLES.STORE_KEEPER]}>
      <div className="min-h-screen bg-black text-white">
        <Header
          title="Add Product"
          subtitle="Create a new commodity entry"
        />

        <div className="p-6">
          <ProductForm />
        </div>
      </div>
    </RoleGuard>
  );
}