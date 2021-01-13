import React from "react"
import Skillbar from "../components/skill-bar"
const skills = [
  {
    label: "Having fun while learning!",
    level: "5",
  },
  {
    label: "C#",
    level: "4",
  },
  {
    label: "C++",
    level: "3",
  },
  {
    label: "Web development (Angular & ReactJS)",
    level: "3",
  },
  {
    label: "Unity",
    level: "2",
  },
  {
    label: "Xamarin & Flutter",
    level: "1",
  },
  {
    label: "C",
    level: "1",
  },
]
export default function Skill({ className, showContent = true }) {
  return (
    <div className={className + " bg-skill flex flex-col justify-center"}>
      {showContent && (
        <Skillbar
          skills={skills}
          className="mx-auto w-11/12 md:w-2/3 h-1/2 mb-40"
        ></Skillbar>
      )}
    </div>
  )
}
