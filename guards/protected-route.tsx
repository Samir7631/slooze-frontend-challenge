"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { storage } from "@/lib/utils/storage";
import { ROUTES } from "@/lib/constants/routes";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const router = useRouter();
  const { user, token, setAuth } = useAuthStore();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const savedAuth = storage.get("auth");

    if (!user && !token && savedAuth?.user && savedAuth?.token) {
      setAuth(savedAuth.user, savedAuth.token);
      setChecking(false);
      return;
    }

    if (!user && !token && !savedAuth) {
      router.replace(ROUTES.LOGIN);
      return;
    }

    setChecking(false);
  }, [user, token, setAuth, router]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Checking authentication...
      </div>
    );
  }

  return <>{children}</>;
}