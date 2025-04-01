import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Mock data for the leaderboard
const leaderboardData = [
  {
    id: 1,
    name: "Michael Scott",
    avatar: "/placeholder-profile.svg",
    initials: "MS",
    distance: 245.8,
    rides: 12,
    avgSpeed: 22.5,
  },
  {
    id: 2,
    name: "Jim Halpert",
    avatar: "/placeholder-profile.svg",
    initials: "JH",
    distance: 198.3,
    rides: 9,
    avgSpeed: 24.1,
  },
  {
    id: 3,
    name: "Pam Beesly",
    avatar: "/placeholder-profile.svg",
    initials: "PB",
    distance: 176.5,
    rides: 8,
    avgSpeed: 21.2,
  },
  {
    id: 4,
    name: "Dwight Schrute",
    avatar: "/placeholder-profile.svg",
    initials: "DS",
    distance: 165.2,
    rides: 7,
    avgSpeed: 23.8,
  },
  {
    id: 5,
    name: "Angela Martin",
    avatar: "/placeholder-profile.svg",
    initials: "AM",
    distance: 142.7,
    rides: 6,
    avgSpeed: 20.5,
  },
]

export function Leaderboard({ extended = false }: { extended?: boolean }) {
  const displayData = extended ? leaderboardData : leaderboardData.slice(0, 3)

  return (
    <div className="space-y-4">
      {displayData.map((user, index) => (
        <div key={user.id} className="flex items-center gap-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
            {index + 1}
          </div>
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className={index === 0 ? "text-orange-500" : "bg-muted"}>{user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              {index === 0 && <Badge className="bg-orange-500">Leader</Badge>}
            </div>
            <p className="text-xs text-muted-foreground">
              {user.distance} km • {user.rides} rides
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{user.distance} km</p>
            <p className="text-xs text-muted-foreground">Total Distance</p>
          </div>
        </div>
      ))}
    </div>
  )
}

