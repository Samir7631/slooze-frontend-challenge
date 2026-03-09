"use client";

import Header from "@/components/layout/header";
import RoleGuard from "@/guards/role-guard";
import { ROLES } from "@/lib/constants/roles";
import ProductForm from "@/features/product/components/product-form";
import { ProductFormData } from "@/features/product/type/product.types";

const mockExistingProduct: ProductFormData = {
  name: "Rice",
  category: "Grains",
  quantity: 100,
  price: 50,
  unit: "kg",
  status: "IN_STOCK",
  description: "Standard rice inventory item",
};

export default function EditProductPage() {
  return (
    <RoleGuard allowedRoles={[ROLES.MANAGER, ROLES.STORE_KEEPER]}>
      <div className="min-h-screen bg-black text-white">
        <Header
          title="Edit Product"
          subtitle="Update existing commodity details"
        />

        <div className="p-6">
          <ProductForm initialValues={mockExistingProduct} mode="edit" />
        </div>
      </div>
    </RoleGuard>
  );
}