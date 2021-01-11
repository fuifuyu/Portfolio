import React from "react"
import "./components.css"
import { RiPushpinFill, RiPushpin2Fill } from "react-icons/ri"
import { BsEyeFill, BsEyeSlash } from "react-icons/bs"
const Navbar = ({ navigate, showContentFn, active }) => {
  let [showContent, setShowContent] = React.useState(true)
  let [hideNav, setHideNav] = React.useState(false)
  let hoverTarget = ""
  if (hideNav) hoverTarget = "hover-target"
  return (
    <>
      <div
        className={`fixed inset-x-0 bottom-0 z-10${
          hideNav ? " detect-hover" : ""
        } pb-4`}
      >
        <div
          className={`${hoverTarget} opacity-50 justify-center items-end flex flex-row h-full text-center text-gray-700 navbar`}
        >
          <button
            onClick={() => navigate("intro")}
            className={`${active == "intro" ? "active" : ""}`}
          >
            Intro
          </button>
          <button
            onClick={() => navigate("skill")}
            className={`${active == "skill" ? "active" : ""}`}
          >
            Skill
          </button>
          <button
            onClick={() => navigate("timeline")}
            className={`${active == "timeline" ? "active" : ""}`}
          >
            Timeline
          </button>
          <button
            onClick={() => navigate("goal")}
            className={`${active == "goal" ? "active" : ""}`}
          >
            Goal
          </button>
          <button
            onClick={() => navigate("gallery")}
            className={`${active == "gallery" ? "active" : ""}`}
          >
            Gallery
          </button>
          <div
            onClick={() => setHideNav(!hideNav)}
            className="inline ml-2 bg-tint-1 px-1 py-1 rounded-sm text-sm"
          >
            {hideNav ? <RiPushpinFill /> : <RiPushpin2Fill />}
          </div>
          <div
            onClick={() => {
              showContentFn(!showContent)
              setShowContent(!showContent)
            }}
            className="inline ml-2 bg-tint-1 px-1 py-1 rounded-sm text-sm"
          >
            {showContent ? <BsEyeFill /> : <BsEyeSlash />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
