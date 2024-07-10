'use client';
import { IGame } from "@/types";
import { useState } from "react";
// eslint-disable @next/next/no-img-element

export default function Home() {
  const [games, setGames] = useState([] as IGame[])
  const [search, setSearch] = useState('');

  const handleGetGames = async () => {
    try {

      const resp = await fetch('/api/games/search', {
        method: 'POST',
        body: JSON.stringify({
          search
        })
      })
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
        value={search}
        onChange={e => { setSearch(e.currentTarget.value) }}
      />
      <button
        onClick={handleGetGames}
      >Search</button>
      {
        !!games.length && games.map(g => 
          <div
            key={g.id}
          >
            <img
              src={`//images.igdb.com/igdb/image/upload/t_cover_big/${g.cover?.image_id}.jpg`}
              alt="game-cover"
            />
            { g.name }
          </div>
        )
      }
    </main>
  );
}
