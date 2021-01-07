import React from "react"
import "./components.css"
const Navbar = ({ navigate, active }) => {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 justify-center items-end flex flex-row z-10 detect-hover pb-4 text-center text-gray-700">
        <div className="hover-target">
          <button
            onClick={() => navigate("intro")}
            className={active == "intro" ? "active" : ""}
          >
            Intro
          </button>
          <button
            onClick={() => navigate("skill")}
            className={active == "skill" ? "active" : ""}
          >
            Skill
          </button>
          <button
            onClick={() => navigate("timeline")}
            className={active == "timeline" ? "active" : ""}
          >
            Timeline
          </button>
          <button
            onClick={() => navigate("goal")}
            className={active == "goal" ? "active" : ""}
          >
            Goal
          </button>
          <button
            onClick={() => navigate("gallery")}
            className={active == "gallery" ? "active" : ""}
          >
            Gallery
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
