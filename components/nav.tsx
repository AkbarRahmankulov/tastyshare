"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, Plus, Search, User } from "lucide-react";

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">TastyShare</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search recipes..."
                className="h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-8 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className={pathname === "/" ? "bg-accent" : ""}
              asChild
            >
              <Link href="/">
                <Home className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={pathname === "/recipes/new" ? "bg-accent" : ""}
              asChild
            >
              <Link href="/recipes/new">
                <Plus className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={pathname === "/profile" ? "bg-accent" : ""}
              asChild
            >
              <Link href="/profile">
                <User className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </nav>
  );
}
