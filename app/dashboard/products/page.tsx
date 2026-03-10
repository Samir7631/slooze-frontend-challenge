"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/header";
import RoleGuard from "@/guards/role-guard";
import { ROLES } from "@/lib/constants/roles";
import { productService } from "@/features/product/service/product.service";
import ProductTable from "@/features/product/components/product-table";
import { Product } from "@/features/product/type/product.types";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await productService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <RoleGuard allowedRoles={[ROLES.MANAGER, ROLES.STORE_KEEPER]}>
      <div className="min-h-screen bg-black text-white">
        <Header
          title="Products"
          subtitle="Manage and monitor available commodities"
        />

        <div className="p-6">
          {loading ? (
            <div className="grid gap-4">
              <div className="h-16 animate-pulse rounded-xl bg-gray-900" />
              <div className="h-16 animate-pulse rounded-xl bg-gray-900" />
              <div className="h-16 animate-pulse rounded-xl bg-gray-900" />
            </div>
          ) : (
            <ProductTable products={products} />
          )}
        </div>
      </div>
    </RoleGuard>
  );
}