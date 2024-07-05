
export async function getGames() {

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Client-ID", process.env.NEXT_PUBLIC_GAME_CLIENT_ID || "");
  headers.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_GAME_ACCESS_TOKEN || ""}`);
  headers.append("Access-Control-Allow-Origin", "*");

  const res = await fetch('https://api.igdb.com/v4/games', {
    method: "POST",
    headers,
    body: "fields *;",
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
   
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
   
  return res.json()
}