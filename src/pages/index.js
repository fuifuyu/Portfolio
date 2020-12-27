import React from "react"
import Navbar from "../components/navbar"
import { TransitionGroup, Transition } from "react-transition-group"
import { roomMap, animPresetMap } from "../maps/animationMap"
import "../page-animations.css"
import "./index.css"

const Intro = props => <div className="text-center mt-96">Intro</div>
const Skill = props => <div className="text-center mt-96">Skill</div>
const Timeline = props => <div className="text-center mt-96">Timeline</div>
const Goal = props => <div className="text-center mt-96">Goal</div>
const Gallery = props => <div className="text-center mt-96">Gallery</div>

let nextPage = "intro"
let curPage = "intro"

const IndexPage = () => {
  const [page, setPage] = React.useState("intro")
  function navigate(key) {
    curPage = page
    nextPage = key
    setPage(key)
  }
  return (
    <>
      <Navbar navigate={navigate} />
      <div className="page-wrapper">
        <TransitionGroup component={null}>
          <Transition key={page} timeout={2000}>
            {state => {
              let animClass = ""
              if (state == "entering" || state == "exiting") {
                console.log(curPage, nextPage, roomMap)
                let preset = roomMap[curPage][nextPage]
                if (preset) {
                  animClass = " rotate " + animPresetMap[preset][state]
                }
              }
              let comp
              switch (page) {
                case "intro":
                  comp = <Intro />
                  break
                case "skill":
                  comp = <Skill />
                  break
                case "timeline":
                  comp = <Timeline />
                  break
                case "goal":
                  comp = <Goal />
                  break
                case "gallery":
                  comp = <Gallery />
                  break
              }
              return (
                <div className={"bg-gray-300 page" + animClass}>{comp}</div>
              )
            }}
          </Transition>
        </TransitionGroup>
      </div>
    </>
  )
}
export default IndexPage
