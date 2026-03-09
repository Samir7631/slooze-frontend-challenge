import { products } from "@/mock/product";
import { DashboardStats } from "@/features/dashboard/type/dashboard.type";

export const dashboardService = {
  getStats: async (): Promise<DashboardStats> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const totalProducts = products.length;
        const totalCategories = new Set(products.map((item) => item.category)).size;
        const lowStockCount = products.filter(
          (item) => item.status === "LOW_STOCK"
        ).length;
        const outOfStockCount = products.filter(
          (item) => item.status === "OUT_OF_STOCK"
        ).length;

        resolve({
          totalProducts,
          totalCategories,
          lowStockCount,
          outOfStockCount,
        });
      }, 300);
    });
  },
};