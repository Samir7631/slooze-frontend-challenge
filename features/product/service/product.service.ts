import { products } from "@/mock/product";
import { Product } from "@/features/product/type/product.types";

export const productService = {
  getProducts: async (): Promise<Product[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 300);
    });
  },
};
