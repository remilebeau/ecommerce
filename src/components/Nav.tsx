"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathName = usePathname();
  return (
    <header className="bg-primary text-primary-foreground flex justify-center px-4">
      <nav className="flex flex-row text-xl max-w-4xl mx-auto  justify-between">
        <Link
          href="/admin"
          className={`p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground ${
            pathName === "/admin" && "bg-secondary text-secondary-foreground"
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/admin/products"
          className={`p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground ${
            pathName === "/admin/products" &&
            "bg-secondary text-secondary-foreground"
          }`}
        >
          Products
        </Link>
        <Link
          href="/admin/users"
          className={`p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground ${
            pathName === "/admin/users" &&
            "bg-secondary text-secondary-foreground"
          }`}
        >
          Users
        </Link>
        <Link
          href="/admin/sales"
          className={`p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground ${
            pathName === "/admin/sales" &&
            "bg-secondary text-secondary-foreground"
          }`}
        >
          Sales
        </Link>
      </nav>
    </header>
  );
}
