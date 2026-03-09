"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { Role } from "@/lib/constants/roles";
import { ROUTES } from "@/lib/constants/routes";

type RoleGuardProps = {
  children: ReactNode;
  allowedRoles: Role[];
};

export default function RoleGuard({
  children,
  allowedRoles,
}: RoleGuardProps) {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user && !allowedRoles.includes(user.role)) {
      router.replace(ROUTES.UNAUTHORIZED);
    }
  }, [user, allowedRoles, router]);

  if (!user) return null;

  if (!allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}