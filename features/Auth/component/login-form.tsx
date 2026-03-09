"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginPayload } from "../type/auth.type";
import { authService } from "../service/auth.service";
import { useAuthStore } from "@/store/auth-store";
import { storage } from "@/lib/utils/storage";
import { ROUTES } from "@/lib/constants/routes";
import { ROLES } from "@/lib/constants/roles";

export default function LoginForm() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginPayload>();

  const onSubmit = async (data: LoginPayload) => {
    try {
      setError("");

      const response = await authService.login(data);

      setAuth(response.user, response.token);
      storage.set("auth", response);

      if (response.user.role === ROLES.MANAGER) {
        router.push(ROUTES.DASHBOARD);
      } else {
        router.push(ROUTES.PRODUCTS);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg border border-gray-700 bg-gray-900 p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-white">Login</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-gray-300">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white outline-none"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-sm text-gray-300">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white outline-none"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-white px-4 py-2 font-medium text-black transition hover:bg-gray-200 disabled:opacity-50"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>

      <div className="mt-6 rounded-md bg-gray-800 p-3 text-sm text-gray-300">
        <p className="font-semibold text-white">Demo Credentials:</p>
        <p className="mt-2">Manager: manager@test.com / 123456</p>
        <p>Store Keeper: store@test.com / 123456</p>
      </div>
    </div>
  );
}