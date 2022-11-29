import React, { useEffect } from "react"
import { Lightbox } from "react-modal-image"
import "./css/timeline.css"
import "../animation/animation.css"
import fox from "../images/timeline/fox.gif"
import maze from "../images/timeline/maze.gif"
import trapped from "../images/timeline/trapped.gif"
import gue1 from "../images/timeline/gue-1.gif"
import gue2 from "../images/timeline/gue-2.gif"
import scheduler2 from "../images/timeline/scheduler-2.gif"
import scheduler3 from "../images/timeline/scheduler-3.gif"
import watopoly1 from "../images/timeline/watopoly-1.jpeg"
import watopoly2 from "../images/timeline/watopoly-2.jpeg"
import watopoly3 from "../images/timeline/watopoly-3.jpeg"
import watopoly4 from "../images/timeline/watopoly-4.gif"
import robotRed from "../images/timeline/robot-red.jpeg"
import ferris from "../images/timeline/ferris.jpeg"
import hackernest from "../images/timeline/hackernest.png"
import realtimefluid from "../images/timeline/realtime-fluid.gif"

const history = [
  {
    title: "SIGGRAPH Asia",
    date: "2022",
    type: "work",
    desc: <span className="text-gray-700">Team Leader</span>
  },
  {
    title: "Kyoto University",
    date: "2022",
    type: "other",
    desc: <span className="text-gray-700">Study Exchange</span>
  },
  {
    title: "SIGGRAPH",
    date: "2022",
    type: "work",
    desc: <span className="text-gray-700">Student Volunteer</span>
  },
  {
    title: "Mercari Inc",
    date: "2022",
    type: "work",
    desc: <span className="text-gray-700">Backend Developer</span>,
    tags: ["Go","GCP", "datadog"]
  },
  {
    title: "Undergraduate Research Assistantship Program",
    date: "2021",
    type: "work",
    desc: (
    <>
      <span className="text-gray-700">Part-time research with Professor Toshiya Hachisuka</span>
      <div>This is a demo of the implementation of the paper "Real-Time Fluid Dynamics for Games" by Joe Stam</div>
    </>
    ),
    images: [realtimefluid],
    tags: ["C++", "Graphics", "Fluid simulation"]
  },
  {
    title: "Wish, ContextLogic Inc",
    date: "2021",
    type: "work",
    desc: <span className="text-gray-700">Backend Developer</span>,
    tags: ["Python", "Go", "MongoDB"]
  },
  {
    title: "The Ghost",
    date: "2021",
    type: "projects",
    desc: (
      <>
        <a className="text-sm hover:text-blue-500 hover:underline" href="https://youtu.be/eL4Oxux2Br4">
          demo video
        </a>
        <div>
          An adventure horror game prototype in the ruins of past emperors.
        </div>
      </>
    ),
    images: [hackernest],
    tags: ["C++", "VS 2019"]
  },
  {
    title: "Loadlink Technologies",
    date: "2020",
    type: "work",
    desc: <span className="text-gray-700">Frontend Developer</span>,
    tags: ["Angular 7", "Xamarin Forms"],
  },
  {
    title: "Watopoly",
    date: "2020",
    type: "projects",
    desc:
      "Replicate monopoly game in text and XDisplay according to the official rules.",
    images: [watopoly1, watopoly2, watopoly3, watopoly4],
    tags: ["C++", "Design Pattern"],
  },
  {
    title: "Gamified University Experience",
    date: "2020",
    type: "projects",
    desc: (
      <>
        Gamification of my university journey in a platformer! (Prototype)
        <div className="text-sm">
          *All humanoid sprites are placeholder and are not owned by us*
        </div>
      </>
    ),
    images: [gue1, gue2],
    tags: ["Unity", "C#"],
  },
  {
    title: "Grace Hopper Celebration",
    date: "2020",
    type: "others",
    desc: <span className="text-gray-700">Attendee</span>,
  },
  {
    title: "Where is my time?",
    date: "2020",
    type: "projects",
    desc:
      "A time management application, in mobile and web, that tracks the tasks that need to be done and where you have spent your time!",
    images: [scheduler2, scheduler3],
    tags: ["Flutter", "ReactJS"],
  },
  {
    title: "Hackathons",
    date: "2020-2021",
    type: "others",
    desc: (
      <>
        <span className="text-gray-700">Hacker</span>
        <div>
          Ͱ Developed an app to keep track of food expiry date @ Elle's Hack
          2020
        </div>
        <div>
          Ͱ Created "The Ghost That Blew Out the Candle" @ Hack The North 2021
        </div>
      </>
    ),
  },
  {
    title: "AIESEC Waterloo",
    date: "2020",
    type: "others",
    desc:
      "Promoted the SDG Goals from UN by reaching out to youth who wish to volunteering for a social cause abroad.",
  },
  {
    title: "Unionville H.S Robotics Team",
    date: "2019",
    type: "others",
    desc: (
      <>
        <span className="text-gray-700">President</span>
        <div>
          Found and led Team 7721 to participate in the FIRST Robotics
          competition. We also competed in the Ontario Skills Competition.
        </div>
        <div>Lots of memorable moments and fun!</div>
      </>
    ),
    images: [robotRed, ferris],
    tags: ["Robotics", "Java"],
  },
  {
    title: "Indusflow System",
    date: "2018",
    type: "work",
    desc: <span className="text-gray-700">Software Developer Intern</span>,
    tags: ["JQuery/HTML", "SQL", "ASP.NET"],
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
        <div>2) A simple marble maze game.</div>
        <div>
          3) A relaxing VR environment with a pet fox and fishing activity.
        </div>
        <div className="text-sm">*The fox below is created by team member*</div>
      </>
    ),
    images: [trapped, maze, fox],
    tags: ["Unity", "Javascript"],
  },
]

export default function Timeline({ className, showContent }) {
  let [type, setType] = React.useState("all")
  let [modalImage, setModalImage] = React.useState()
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
          <div className="flex flex-col sm:flex-row justify-end w-auto sm:w-2/3 mx-auto mb-2 truncate rounded wipe">
            <button
              className={`${type == "all" ? "active" : ""} sm:rounded-l`}
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
            className="relative w-11/12 md:w-2/3 h-1/2 md:h-2/3 mx-auto wipe bg-tint-2 bg-opacity-5 border-r-8 border-l-8 border-tint-1 rounded-xl border-opacity-75 overflow-x-scroll overflow-y-hidden z-50"
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
                  <div
                    className="card-image-container relative cursor-pointer"
                    key={index}
                    onClick={() => {
                      setModalImage(img)
                    }}
                  >
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
                        {date && <div class="bg-white bg-opacity-30 rounded pl-1">{date}</div>}
                      </div>
                      <div className="card-body whitespace-pre-line">
                        {desc}
                      </div>
                      {imgComps?.length > 0 && (
                        <div className="card-end justify-center mt-1">
                          {imgComps}
                        </div>
                      )}
                      {tagComps?.length > 0 && (
                        <div className="card-end text-sm mt-1">{tagComps}</div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {modalImage != undefined && (
            <Lightbox
              medium={modalImage}
              hideDownload="true"
              hideZoom="true"
              onClose={() => {
                setModalImage(undefined)
              }}
            />
          )}
        </>
      )}
    </div>
  )
}
