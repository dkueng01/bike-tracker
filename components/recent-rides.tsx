import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

// Mock data for recent rides
const recentRidesData = [
  {
    id: 1,
    route: "Morning Commute",
    distance: 8.5,
    duration: 25,
    date: new Date(2023, 3, 15),
    user: {
      name: "Michael Scott",
      avatar: "/placeholder-profile.svg",
      initials: "MS",
    },
  },
  {
    id: 2,
    route: "Park Loop",
    distance: 12.3,
    duration: 45,
    date: new Date(2023, 3, 12),
    user: {
      name: "Michael Scott",
      avatar: "/placeholder-profile.svg",
      initials: "MS",
    },
  },
  {
    id: 3,
    route: "Weekend Trail",
    distance: 24.7,
    duration: 95,
    date: new Date(2023, 3, 10),
    user: {
      name: "Michael Scott",
      avatar: "/placeholder-profile.svg",
      initials: "MS",
    },
  },
  {
    id: 4,
    route: "City Tour",
    distance: 18.2,
    duration: 70,
    date: new Date(2023, 3, 5),
    user: {
      name: "Michael Scott",
      avatar: "/placeholder-profile.svg",
      initials: "MS",
    },
  },
]

export function RecentRides() {
  return (
    <div className="space-y-4">
      {recentRidesData.map((ride) => (
        <div key={ride.id} className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={ride.user.avatar} alt={ride.user.name} />
            <AvatarFallback className="text-orange-500">{ride.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{ride.route}</p>
            <p className="text-xs text-muted-foreground">
              {ride.distance} km • {ride.duration} min
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">{formatDistanceToNow(ride.date, { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </div>
  )
}