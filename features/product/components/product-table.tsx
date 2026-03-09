import { Product } from "@/features/product/type/product.types";

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