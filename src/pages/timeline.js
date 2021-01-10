import React, { useEffect } from "react"
import "./css/timeline.css"
import "../animation/animation.css"
import fox from "../images/timeline/fox.gif"
import maze from "../images/timeline/hana_maze.gif"
import trapped from "../images/timeline/trapped.gif"

const history = [
  {
    title: "The Pear Project",
    date: "2019-Current",
    type: "projects",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "Loadlink Technologies",
    date: "2020",
    type: "work",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "Gamified University Experience",
    date: "2020",
    type: "projects",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "Watopoly",
    date: "2020",
    type: "projects",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "Grace Hopper Attendee",
    date: "2020",
    type: "others",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "Hackathons",
    date: "2020",
    type: "others",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "AIESEC Waterloo",
    date: "2020",
    type: "others",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "Unionville H.S Robotics Team",
    date: "2020",
    type: "others",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "Where is my time?",
    date: "2020",
    type: "projects",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "Indusflow System",
    date: "2018",
    type: "work",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "Toronto Montessori School",
    date: "2018",
    type: "work",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [],
  },
  {
    title: "Highschool Project",
    date: "2018",
    type: "projects",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue aliquet velit, id imperdiet ante malesuadaeget.",
    images: [trapped, maze, fox],
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
            className="relative w-2/3 h-1/2 md:h-2/3 mx-auto wipe bg-tint-2 bg-opacity-5 border-r-8 border-l-8 border-tint-1 rounded-xl border-opacity-75 overflow-x-scroll overflow-y-hidden"
            onWheel={e => {
              e.currentTarget.scrollLeft += e.deltaY
              e.stopPropagation()
            }}
          >
            <div className="absolute-center-y flex flex-row text-xl text-gray-800 flex-nowrap h-80">
              {(type == "all"
                ? history
                : history.filter(h => h.type == type)
              ).map(({ title, date, desc, type, images }) => {
                let imgComps = images.map((img, index) => (
                  <div className="card-image-container relative" key={index}>
                    <img src={img} className="card-image" />
                    <img src={img} className="card-hover-image rounded-md" />
                  </div>
                ))
                return (
                  <div className="slot" key={title}>
                    <div className={`card ${type}`}>
                      <div className="card-title">
                        <div>{title}</div>
                        <div>{date}</div>
                      </div>
                      <div className="card-body">{desc}</div>
                      <div className="card-end">{imgComps}</div>
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
