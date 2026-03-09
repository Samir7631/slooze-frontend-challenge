import { users } from "@/mock/user";
import { AuthResponse, LoginPayload } from "../type/auth.type";

export const authService = {
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const user = users.find(
      (item) =>
        item.email === payload.email && item.password === payload.password
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    return {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token: "mock-token-123",
    };
  },
};

