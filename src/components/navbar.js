import React from "react"
import "./components.css"
const Navbar = ({ navigate }) => {
  return (
    <>
      <div
        className="fixed inset-x-0 bottom-0 justify-center items-end flex flex-row z-50 hoverable pb-4"
        onWheel={e => {
          console.log("nav first")
        }}
      >
        <button onClick={() => navigate("intro")}>Intro</button>
        <button onClick={() => navigate("skill")}>Skill</button>
        <button onClick={() => navigate("timeline")}>Timeline</button>
        <button onClick={() => navigate("goal")}>Goal</button>
        <button onClick={() => navigate("gallery")}>Gallery</button>
      </div>
    </>
  )
}

export default Navbar
