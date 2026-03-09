import { ROUTES } from "./routes";
import { ROLES, Role } from "./roles";

type MenuItem = {
  label: string;
  href: string;
  roles: Role[];
};

export const MENU_ITEMS: MenuItem[] = [
  {
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
    roles: [ROLES.MANAGER],
  },
  {
    label: "Products",
    href: ROUTES.PRODUCTS,
    roles: [ROLES.MANAGER, ROLES.STORE_KEEPER],
  },
  {
    label: "Add Product",
    href: ROUTES.ADD_PRODUCT,
    roles: [ROLES.MANAGER, ROLES.STORE_KEEPER],
  },
];