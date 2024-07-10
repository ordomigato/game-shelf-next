import { getGames } from "@/services/game"

export async function GET() {
  const data = await getGames()
  return Response.json({ data })
}