import { Product } from "@/features/product/type/product.types";

export const products: Product[] = [
  {
    id: "1",
    name: "Rice",
    category: "Grains",
    quantity: 100,
    price: 50,
    unit: "kg",
    status: "IN_STOCK",
  },
  {
    id: "2",
    name: "Wheat",
    category: "Grains",
    quantity: 40,
    price: 45,
    unit: "kg",
    status: "LOW_STOCK",
  },
  {
    id: "3",
    name: "Sugar",
    category: "Sweeteners",
    quantity: 0,
    price: 60,
    unit: "kg",
    status: "OUT_OF_STOCK",
  },
  {
    id: "4",
    name: "Salt",
    category: "Essentials",
    quantity: 200,
    price: 20,
    unit: "kg",
    status: "IN_STOCK",
  },
];