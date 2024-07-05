'use client';
import { getGames } from "@/services/game"
import { useState } from "react";

export default function Home() {
  const [games, setGames] = useState([])

  const handleGetGames = async () => {
    try {
      const resp = await fetch('/api/games')
      const { data } = await resp.json()
      console.log(data)
      setGames(data)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <main>
      <input
        type="text"
      />
      <button
        onClick={handleGetGames}
      >Search</button>
      {
        !!games.length && games.map(g => 
          <div
            key={g.id}
          >
            { g.name }
          </div>
        )
      }
    </main>
  );
}
