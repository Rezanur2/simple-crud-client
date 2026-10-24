import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const UserCard = ({ user }) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-2">
      <CardHeader>
        <CardAction>
          <h2>No Action</h2>
        </CardAction>
        <CardTitle>{user.name}</CardTitle>
        <CardDescription>{user.email}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/users/${user._id}`} className="w-full">
          <Button className="w-full">View Event</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default UserCard
