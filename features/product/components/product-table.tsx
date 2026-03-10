import Link from "next/link";
import { Product } from "@/features/product/type/product.types";
import { ROUTES } from "@/lib/constants/routes";

type ProductTableProps = {
  products: Product[];
};

const getStatusClasses = (status: Product["status"]) => {
  switch (status) {
    case "IN_STOCK":
      return "border border-green-500/30 bg-green-500/20 text-green-400";
    case "LOW_STOCK":
      return "border border-yellow-500/30 bg-yellow-500/20 text-yellow-400";
    case "OUT_OF_STOCK":
      return "border border-red-500/30 bg-red-500/20 text-red-400";
    default:
      return "border border-gray-500/30 bg-gray-500/20 text-gray-300";
  }
};

export default function ProductTable({ products }: ProductTableProps) {
  if (!products.length) {
    return (
      <div className="rounded-xl border border-dashed border-gray-700 bg-gray-900 p-10 text-center">
        <h3 className="text-xl font-semibold text-white">No products found</h3>
        <p className="mt-2 text-sm text-gray-400">
          Start by adding a new product to your inventory.
        </p>

        <Link
          href={ROUTES.ADD_PRODUCT}
          className="mt-5 inline-flex rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Add Product
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-800 bg-gray-900">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-white">
          <thead className="bg-gray-950 text-gray-300">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Quantity</th>
              <th className="px-4 py-3 font-medium">Price</th>
              <th className="px-4 py-3 font-medium">Unit</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-gray-800 hover:bg-gray-800/40"
              >
                <td className="px-4 py-3 font-medium">{product.name}</td>
                <td className="px-4 py-3 text-gray-300">{product.category}</td>
                <td className="px-4 py-3 text-gray-300">{product.quantity}</td>
                <td className="px-4 py-3 text-gray-300">₹ {product.price}</td>
                <td className="px-4 py-3 text-gray-300">{product.unit}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${getStatusClasses(
                      product.status
                    )}`}
                  >
                    {product.status.replaceAll("_", " ")}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}