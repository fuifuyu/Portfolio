import React from "react"
import Navbar from "../components/navbar"
import { TransitionGroup, Transition } from "react-transition-group"
import { roomMap, animPresetMap } from "../animation/animationMap"
import "../animation/page-animations.css"
import "./index.css"
import { Intro, Skill, Timeline, Goal, Gallery } from "./pages.js"

let targetPage = [] //change this to an array
let prevPage = "intro"
let numTransition = 0
let multipleRoute = false
const IndexPage = () => {
  const [page, setPage] = React.useState("intro")
  function navigate(key) {
    targetPage = []
    numTransition = 0
    multipleRoute = false
    if (page == key) return
    function findRoute(start, end) {
      if (start == end) return
      if (roomMap[start][end]) {
        targetPage.push(end)
        return
      }
      let firstRoom = Object.keys(roomMap[start])[0]
      targetPage.push(firstRoom)
      findRoute(firstRoom, end)
    }
    if (targetPage.length == 0) {
      if (page == "goal") {
        targetPage.push(prevPage)
        findRoute(prevPage, key)
      } else {
        findRoute(page, key)
      }
    }
    multipleRoute = targetPage.length > 1
    prevPage = page
    setPage(targetPage[0])
    console.log(targetPage)
  }
  return (
    <>
      <Navbar navigate={navigate} />
      <div className="page-wrapper">
        <TransitionGroup component={null}>
          <Transition
            key={page}
            addEndListener={(node, done) => {
              node.addEventListener("animationend", done, false)
            }}
          >
            {state => {
              let animClass = ""
              if (state == "entering" || state == "exiting") {
                let preset = roomMap[prevPage][targetPage[0]]
                numTransition++
                if (preset) {
                  animClass = " rotate " + animPresetMap[preset][state]
                  if (multipleRoute) {
                    animClass = " anim-duration-600" + animClass
                  }
                }
              } else if (numTransition == 4) {
                targetPage.shift()
                numTransition = 0
                if (targetPage.length != 0) {
                  setTimeout(function () {
                    prevPage = page
                    setPage(targetPage[0])
                  }, 10)
                }
              } else if (numTransition >= 2) {
                numTransition++
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
