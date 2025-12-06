import { Route, Routes } from "react-router-dom";
import Players from "./players";
import Player from "./player";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Players />} />
      <Route path="player/:id" element={<Player/>} />
    </Routes>
  )
}