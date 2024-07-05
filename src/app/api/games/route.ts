import { getGames } from "@/services/game"

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET() {
  const data = await getGames()
  return Response.json({ data })
}