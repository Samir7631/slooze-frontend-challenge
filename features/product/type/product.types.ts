export type ProductStatus = "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK";

export type Product = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  unit: string;
  status: ProductStatus;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ProductFormData = {
  name: string;
  category: string;
  quantity: number;
  price: number;
  unit: string;
  status: ProductStatus;
  description?: string;
};
