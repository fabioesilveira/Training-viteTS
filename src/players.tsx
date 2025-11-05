import axios from "axios"
import { useEffect, useState } from "react"

export default function Players() {

    type Players = {
        full_name: "string",
        player_id: "string",
        college: "string",
        age: "string"
    }

    const [players, setPlayers] = useState<Players[]>([])
    const [searchPlayer, setSearchPlayer] = useState("")

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
            console.error("error to fetch the API")
        }
    }, [])

    const filteredPlayers = players.filter((e) => `${e.full_name}`.toLowerCase().includes(searchPlayer.toLowerCase()))

    return (
        <>
            <input
                type="text"
                placeholder="enter a player..."
                value={searchPlayer}
                onChange={(event) => setSearchPlayer(event.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Players</th>
                        <th>Age</th>
                        <th>College</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPlayers .map((e) => (
                        <tr key={e.player_id}>
                            <td>{e.full_name}</td>
                            <td>{e.age}</td>
                            <td>{e.college}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}