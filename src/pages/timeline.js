import React, { useEffect } from "react"
import "./css/timeline.css"
import "../animation/animation.css"
import fox from "../images/timeline/fox.gif"
import maze from "../images/timeline/maze.gif"
import trapped from "../images/timeline/trapped.gif"

const history = [
  {
    title: "The Pear Project",
    date: "2019-Current",
    type: "projects",
    desc: (
      <>
        A team of 5 with various background aiming to solve societal problems
        through art-oriented solutions.
        <div className="text-sm">
          <u>Currently working on: Cup wastes</u>
        </div>
      </>
    ),
    images: [],
    tags: ["Angular 8", "Problem Solving"],
  },
  {
    title: "Loadlink Technologies",
    date: "2020",
    type: "work",
    desc: (
      <>
        <u>Front-end Developer</u>
        <div>Worked on a suite of tools that connect carriers and brokers</div>
      </>
    ),
    images: [],
    tags: ["Angular 7", "Xamarin Forms"],
  },
  {
    title: "Gamified University Experience",
    date: "2020",
    type: "projects",
    desc: "Gamification of my university experience in a platformer!",
    images: [],
    tags: ["Unity", "C#"],
  },
  {
    title: "Watopoly",
    date: "2020",
    type: "projects",
    desc:
      "Replicate monopoly game in text and XDisplay according to the official rules.",
    images: [],
    tags: ["C++", "Design Pattern"],
  },
  {
    title: "Grace Hopper Celebration",
    date: "2020",
    type: "others",
    desc: <u>Attendee</u>,
  },
  {
    title: "Where is my time?",
    date: "2020",
    type: "projects",
    desc:
      "A time management application, in mobile and web, that tracks the tasks that need to be done and where you have spent your time!",
    images: [],
    tags: ["Flutter", "ReactJS"],
  },
  {
    title: "Hackathons",
    date: "2020-2021",
    type: "others",
    desc: (
      <>
        <u>Hacker</u>
        <div>
          Ͱ Developed an app to keep track of food expiry date @ Elle's Hack
          2020
        </div>
      </>
    ),
  },
  {
    title: "AIESEC Waterloo",
    date: "2020",
    type: "others",
    desc:
      "Promoted the SDG Goals from UN by reaching out to youth who wish to volunteering and contributing to social causes abroad.",
  },
  {
    title: "Unionville H.S Robotics Team",
    date: "2019",
    type: "others",
    desc: (
      <>
        <u>President</u>
        <div>
          Found and led Team 7721 to participate in the FIRST Robotics
          competition.
        </div>
        <div>Lots of memorable moments and fun!</div>
      </>
    ),
    images: [],
    tags: ["Robotics", "Java"],
  },
  {
    title: "Indusflow System",
    date: "2018",
    type: "work",
    desc: (
      <>
        <u>Software Developer Intern</u>
        <div>Ͱ Designed data models and implemented it in the webpage.</div>
        <div>Ͱ Fixed bugs in the backup tool in visual basic.</div>
      </>
    ),
    tags: ["JQuery/HTML", "SQL", "Visual Basic"],
  },
  {
    title: "Toronto Montessori School",
    date: "2018",
    type: "work",
    desc:
      "Teaching Python to children from grade two - six in a two-day summer camp.\nEveryone created a simple space invader game of their own style at the end of the camp!",
    tags: ["Python"],
  },
  {
    title: "Highschool Project",
    date: "2018",
    type: "projects",
    desc: (
      <>
        <div>
          1) A splitscreen random-generated maze with items that destroy walls.
        </div>
        <div>2) A very simple marble maze game.</div>
        <div>
          3) A stress-free VR environment where user can fish, grow flowers, and
          interact with a pet fox.
        </div>
        <div className="text-sm">*Fox animations is created by the team*</div>
      </>
    ),
    images: [trapped, maze, fox],
    tags: ["Unity", "Javascript"],
  },
]

export default function Timeline({ className, showContent }) {
  let [type, setType] = React.useState("all")
  let ref = React.createRef()
  useEffect(() => {
    ref.current?.addEventListener("animationend", e => {
      e.stopPropagation()
    })
  }, [])
  return (
    <div className={className + " bg-timeline flex flex-col justify-center"}>
      {showContent && (
        <>
          <div className="flex flex-col sm:flex-row justify-end w-auto sm:w-2/3 mx-auto mb-2 truncate rounded-xl wipe">
            <button
              className={`${type == "all" ? "active" : ""} sm:rounded-l-xl`}
              onClick={() => setType("all")}
            >
              All
            </button>
            <button
              className={`${type == "projects" ? "active" : ""}`}
              onClick={() => setType("projects")}
            >
              Projects
            </button>
            <button
              className={`${type == "work" ? "active" : ""}`}
              onClick={() => setType("work")}
            >
              Work Experience
            </button>
            <button
              className={`${type == "others" ? "active" : ""}`}
              onClick={() => setType("others")}
            >
              Others
            </button>
          </div>
          <div
            ref={ref}
            className="relative w-2/3 h-1/2 md:h-2/3 mx-auto wipe bg-tint-2 bg-opacity-5 border-r-8 border-l-8 border-tint-1 rounded-xl border-opacity-75 overflow-x-scroll overflow-y-hidden z-50"
            onWheel={e => {
              e.currentTarget.scrollLeft += e.deltaY
              e.stopPropagation()
            }}
          >
            <div className="absolute-center-y flex flex-row text-xl text-gray-800 flex-nowrap h-80">
              {(type == "all"
                ? history
                : history.filter(h => h.type == type)
              ).map(({ title, date, desc, type, images, tags }) => {
                let imgComps = images?.map((img, index) => (
                  <div className="card-image-container relative" key={index}>
                    <img src={img} className="card-image" />
                    <img src={img} className="card-hover-image rounded-md" />
                  </div>
                ))
                let tagComps = tags?.map(tag => {
                  return (
                    <div
                      className="rounded bg-blue-200 px-2 text-gray-700 mr-1"
                      key={`${title}-${tag}`}
                    >
                      {tag}
                    </div>
                  )
                })
                return (
                  <div className="slot" key={title}>
                    <div className={`card ${type}`}>
                      <div className="card-title">
                        <div>{title}</div>
                        {date && <div>{date}</div>}
                      </div>
                      <div className="card-body whitespace-pre-line">
                        {desc}
                      </div>
                      <div className="card-end justify-center">{imgComps}</div>
                      {tagComps?.length > 0 && (
                        <div className="card-end text-sm mt-1">{tagComps}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
