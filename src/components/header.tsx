"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation";
import { MapPin, Users, Shield } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6" />
          <Link href="/" className="font-bold">
            Profile Explorer
          </Link>
        </div>

        <nav className="flex items-center gap-4 md:gap-6">
          <Link href="/">
            <Button variant={!isAdmin ? "default" : "ghost"} size="sm">
              <Users className="mr-2 h-4 w-4" />
              Profiles
            </Button>
          </Link>
          <Link href="/admin">
            <Button variant={isAdmin ? "default" : "ghost"} size="sm">
              <Shield className="mr-2 h-4 w-4" />
              Admin
            </Button>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
