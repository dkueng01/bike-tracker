import type { ReactNode } from "react"
import Link from "next/link"
import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import { Bike } from "lucide-react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Bike className="h-6 w-6 text-orange-500" />
            <Link href="/dashboard" className="text-xl font-bold">
              BikeTracker
            </Link>
          </div>
          <UserNav />
        </div>
      </header>
      <main className="flex w-full flex-1 flex-col overflow-hidden p-6">{children}</main>
    </div>
  )
}

