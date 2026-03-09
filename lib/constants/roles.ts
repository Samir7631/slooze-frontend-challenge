export const ROLES = {
  MANAGER: "MANAGER",
  STORE_KEEPER: "STORE_KEEPER",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];
