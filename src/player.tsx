import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Users = {
    id: number,
    name: string,
    email: string,
    address: {
        street: string
    }
}

export default function Player() {

    const [user, setUser] = useState<Users | null>(null)

    const params = useParams();

    useEffect(() => {
        async function fetchApi() {
            try {
                const req = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
                setUser(req.data)
            } catch (error) {
                console.error("error to fetch", error)
            }
        }
        fetchApi()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {!user ? <span>Loading..</span> : <tr key={user.id} >
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.street}</td>
                    </tr>}
                </tbody>
            </table>
        </>
    )
}