"use client";

import { useForm } from "react-hook-form";
import { ProductFormData } from "@/features/product/type/product.types";

type ProductFormProps = {
  initialValues?: ProductFormData;
  mode?: "add" | "edit";
};

export default function ProductForm({
  initialValues,
  mode = "add",
}: ProductFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>({
    defaultValues: initialValues || {
      name: "",
      category: "",
      quantity: 0,
      price: 0,
      unit: "",
      status: "IN_STOCK",
      description: "",
    },
  });

  const onSubmit = async (data: ProductFormData) => {
    console.log(mode === "edit" ? "Updated Product:" : "New Product:", data);
    alert(
      mode === "edit"
        ? "Product updated successfully!"
        : "Product added successfully!"
    );

    if (mode === "add") {
      reset();
    }
  };

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm text-gray-300">
              Product Name
            </label>
            <input
              {...register("name", { required: "Product name is required" })}
              className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none"
              placeholder="Enter product name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Category</label>
            <input
              {...register("category", { required: "Category is required" })}
              className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none"
              placeholder="Enter category"
            />
            {errors.category && (
              <p className="mt-1 text-sm text-red-400">
                {errors.category.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Quantity</label>
            <input
              type="number"
              {...register("quantity", {
                required: "Quantity is required",
                valueAsNumber: true,
                min: { value: 0, message: "Quantity cannot be negative" },
              })}
              className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none"
              placeholder="Enter quantity"
            />
            {errors.quantity && (
              <p className="mt-1 text-sm text-red-400">
                {errors.quantity.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Price</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                valueAsNumber: true,
                min: { value: 0, message: "Price cannot be negative" },
              })}
              className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none"
              placeholder="Enter price"
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-400">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Unit</label>
            <input
              {...register("unit", { required: "Unit is required" })}
              className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none"
              placeholder="kg, litre, packet..."
            />
            {errors.unit && (
              <p className="mt-1 text-sm text-red-400">{errors.unit.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-300">Status</label>
            <select
              {...register("status", { required: "Status is required" })}
              className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none"
            >
              <option value="IN_STOCK">IN STOCK</option>
              <option value="LOW_STOCK">LOW STOCK</option>
              <option value="OUT_OF_STOCK">OUT OF STOCK</option>
            </select>
            {errors.status && (
              <p className="mt-1 text-sm text-red-400">{errors.status.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm text-gray-300">
            Description
          </label>
          <textarea
            rows={4}
            {...register("description")}
            className="w-full rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-white outline-none"
            placeholder="Optional product description"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-white px-5 py-2 font-medium text-black transition hover:bg-gray-200 disabled:opacity-50"
        >
          {isSubmitting
            ? mode === "edit"
              ? "Updating..."
              : "Saving..."
            : mode === "edit"
            ? "Update Product"
            : "Add Product"}
        </button>
      </form>
    </div>
  );
}