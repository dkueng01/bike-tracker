import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BikeRideForm } from "@/components/bike-ride-form"
import { Leaderboard } from "@/components/leaderboard"
import { RecentRides } from "@/components/recent-rides"
import { StatsCards } from "@/components/stats-cards"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button className="bg-orange-500 hover:bg-orange-600">Add New Ride</Button>
      </div>

      <StatsCards />

      <div className="flex flex-col flex-wrap gap-4">
        <Card className="flex-1 min-w-[300px] max-w-full">
          <CardHeader>
            <CardTitle>Recent Rides</CardTitle>
            <CardDescription>Your most recent bike rides</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentRides />
          </CardContent>
        </Card>

        <Card className="flex-1 min-w-[300px] max-w-full">
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
            <CardDescription>Top riders this month</CardDescription>
          </CardHeader>
          <CardContent>
            <Leaderboard />
          </CardContent>
        </Card>

        <Card className="flex-1 min-w-[300px] max-w-full">
          <CardHeader>
            <CardTitle>Add New Ride</CardTitle>
            <CardDescription>Enter the details of your latest bike ride</CardDescription>
          </CardHeader>
          <CardContent>
            <BikeRideForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
