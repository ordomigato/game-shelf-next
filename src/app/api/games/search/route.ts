import { getGames } from "@/services/game"

export async function POST(
  request: Request,
) {
  try {
    const { search } = await request.json()
    const data = await getGames({
      search
    })
    return Response.json({ data })
  } catch (e) {
    console.error(e)
  }
}