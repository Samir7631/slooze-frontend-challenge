"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/features/Auth/component/login-form";
import { useAuthStore } from "@/store/auth-store";
import { storage } from "@/lib/utils/storage";
import { ROUTES } from "@/lib/constants/routes";

export default function LoginPage() {
  const router = useRouter();
  const { user, token, setAuth } = useAuthStore();

  useEffect(() => {
    const savedAuth = storage.get("auth");

    if (!user && !token && savedAuth?.user && savedAuth?.token) {
      setAuth(savedAuth.user, savedAuth.token);
      router.replace(
        savedAuth.user.role === "MANAGER"
          ? ROUTES.DASHBOARD
          : ROUTES.PRODUCTS
      );
      return;
    }

    if (user && token) {
      router.replace(
        user.role === "MANAGER" ? ROUTES.DASHBOARD : ROUTES.PRODUCTS
      );
    }
  }, [user, token, setAuth, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <LoginForm />
    </main>
  );
}