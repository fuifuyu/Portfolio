import React from "react"
const Navbar = ({ navigate }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 justify-center flex flex-row z-50">
      <button onClick={() => navigate("intro")}>Intro</button>
      <button onClick={() => navigate("skill")}>Skill</button>
      <button onClick={() => navigate("timeline")}>Timeline</button>
      <button onClick={() => navigate("goal")}>Goal</button>
      <button onClick={() => navigate("gallery")}>Gallery</button>
    </div>
  )
}

export default Navbar
