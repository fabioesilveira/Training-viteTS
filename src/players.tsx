import axios from "axios"
import { useEffect, useState } from "react"

export default function Players() {

  type Players = {
    player_id: "string",
    full_name: "string",
    position: "string",
    college: "string",
    age: "string"
  }

  const [players, setPlayers] = useState<Players[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState("");

  useEffect(() => {
    try {
      async function fetchApi() {
        const req = await axios.get("https://api.sleeper.app/v1/players/nfl")
        const reqArray = Object.values(req.data) as Players[]
        const fifteenPlayers = reqArray.slice(0, 15)
        setPlayers(fifteenPlayers)
      }

      fetchApi()
    } catch (error) {
      console.error("error to fetch the API", error)
    }
  }, [])

  const searchedPlayer = players.filter((e) => e.full_name.toLowerCase().includes(filteredPlayers.toLowerCase()))


  return (
    <>
      <input
        type="text"
        placeholder="enter a player.."
        value={filteredPlayers}
        onChange={(event) => setFilteredPlayers(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Age</th>
            <th>College</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {searchedPlayer.map((e) => (
            <tr key={e.player_id}>
              <td>{e.full_name}</td>
              <td>{e.age}</td>
              <td>{e.college}</td>
              <td>{e.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}