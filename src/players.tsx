import axios from "axios"
import { useEffect, useState } from "react"

type Players = {
  full_name: string,
  position: string,
  age: string
}

export default function Players() {

  const [players, setPlayers] = useState<Players[]>([])

  useEffect(() => {
    async function fetchApi() {
      const req = await axios.get("https://api.sleeper.app/v1/players/nfl")
      const convertObject = Object.values(req.data) as Players[]
      const fifteenPlayers = convertObject.slice(0, 15)
      setPlayers(fifteenPlayers)
    }
    fetchApi()
  }, [])

  return (
    <>
     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {players.map((e) => (
          <tr>
            <td>{e.full_name}</td>
            <td>{e.position}</td>
            <td>{e.age}</td>
          </tr>
        ))}
      </tbody>
     </table>
    </>
  )
}