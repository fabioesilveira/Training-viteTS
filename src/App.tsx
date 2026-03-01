import { Route, Routes } from "react-router-dom";
import Players from "./Players";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Players />} />
      {/* <Route path="player/:id" element={<Player/>} /> */}
    </Routes>
  )
}