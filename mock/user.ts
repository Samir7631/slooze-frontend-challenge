import { ROLES } from "@/lib/constants/roles";

export const users = [
  {
    id: "1",
    name: "John Manager",
    email: "manager@test.com",
    password: "123456",
    role: ROLES.MANAGER,
  },
  {
    id: "2",
    name: "Steve Storekeeper",
    email: "store@test.com",
    password: "123456",
    role: ROLES.STORE_KEEPER,
  },
];
