"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Bike, Home, Medal, Settings, User } from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "My Rides",
    href: "/dashboard/rides",
    icon: Bike,
  },
  {
    title: "Leaderboard",
    href: "/dashboard/leaderboard",
    icon: Medal,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 py-4">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <Button variant="ghost" className={cn("w-full justify-start gap-2", pathname === item.href && "bg-muted")}>
            <item.icon className="h-4 w-4" />
            {item.title}
          </Button>
        </Link>
      ))}
    </nav>
  )
}