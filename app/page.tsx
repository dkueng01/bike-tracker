import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bike, ChevronRight, Trophy, Users } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Bike className="h-6 w-6 text-orange-500" />
            <span className="text-xl font-bold">BikeTracker</span>
          </div>
          <Link href="/login">
            <Button variant="outline" className="gap-1">
              Login <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="container space-y-6 py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Track Your <span className="text-orange-500">Bike Rides</span> with Colleagues
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Join your colleagues in tracking bike rides, competing for the leaderboard, and promoting a healthy
              lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/login">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                  Get Started
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="features" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 md:px-6 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-orange-500/20 p-3">
                <Bike className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Track Rides</h3>
              <p className="text-center text-muted-foreground">
                Easily log your bike rides with distance, time, and route information.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-orange-500/20 p-3">
                <Trophy className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Compete</h3>
              <p className="text-center text-muted-foreground">
                Join the leaderboard and compete with colleagues for the top spots.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="rounded-full bg-orange-500/20 p-3">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-center text-muted-foreground">
                Connect with colleagues who share your passion for cycling.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Bike className="h-5 w-5 text-orange-500" />
            <span className="font-semibold">BikeTracker</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BikeTracker. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

