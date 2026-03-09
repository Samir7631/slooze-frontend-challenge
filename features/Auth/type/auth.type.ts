import { Role } from "@/lib/constants/roles";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  user: User;
  token: string;
};
