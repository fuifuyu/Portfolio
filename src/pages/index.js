import React, { useEffect } from "react"
import Navbar from "../components/navbar"
import { TransitionGroup, Transition } from "react-transition-group"
import { roomMap, animPresetMap } from "../animation/animationMap"
import "../animation/page-animations.css"
import "./css/index.css"

import Intro from "./intro"
import Skill from "./skill"
import Timeline from "./timeline"
import Goal from "./goal"
import Gallery from "./gallery"
import "./css/page.css"

let targetPage = [] //change this to an array
let prevPage = "intro"
let numTransition = 0
let multipleRoute = false
let pageOrder = Object.keys(roomMap)
const images = [
  require("../images/background/intro.jpg"),
  require("../images/background/coming-soon.jpg"),
  require("../images/background/goal.jpg"),
  require("../images/background/timeline.jpg"),
  require("../images/background/skill.jpg"),
  require("../images/star1.png"),
  require("../images/star2.png"),
]
const cursorFires = Array.from({length:25},(v,k) => k+1).map((index) => require(`../images/fire/fire${index}.png`));
console.log(cursorFires);
if (typeof document !== `undefined`) {
  document.body.style = "background: #30343d;"
}

let mouseIndex = 1;
let threshold = 0;
const IndexPage = () => {
  const [page, setPage] = React.useState("intro")
  const [loaded, setLoaded] = React.useState(false)
  const [showContent, setShowContent] = React.useState(true)
  useEffect(() => {
    const promises = images.map(
      img =>
        new Promise((resolve, rejects) => {
          const image = new Image()
          image.src = img
          image.onload = resolve
          image.onerror = rejects
        })
    )
    Promise.all(promises).then(() => {
      setLoaded(true)
    })
  }, [])
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
  }
  function getNextPage(forward) {
    let index = pageOrder.indexOf(page)
    if (forward) {
      index++
    } else {
      index--
    }
    if (index >= pageOrder.length) index = 0
    else if (index < 0) index = pageOrder.length - 1
    return index
  }
  if (typeof window !== `undefined`) {
    window.onmousemove = function (e) {
      if(++threshold<8){
        return;
      }
      threshold=0;
      mouseIndex++;
      if(mouseIndex > 24) mouseIndex = 0;
      document.body.style.cursor = `url("${cursorFires[mouseIndex]}") 32 40, auto`;
    }
    window.onwheel = function (e) {
      if (targetPage.length > 0) return
      if (e.ctrlKey) return
      let index = getNextPage(e.deltaY > 0) //navigate forward or backward
      navigate(pageOrder[index])
    }
    window.onkeyup = e => {
      if (targetPage.length > 0) return
      if (e.key == "ArrowDown" || e.key == "s") {
        if (page != "goal") return
        navigate(prevPage)
      } else if (e.key == "ArrowUp" || e.key == "w") {
        if (page == "goal") return
        navigate("goal")
      } else if (e.key == "ArrowLeft" || e.key == "a") {
        if (page == "goal") return
        let index = getNextPage(false)
        if (pageOrder[index] == "goal") index--
        navigate(pageOrder[index])
      } else if (e.key == "ArrowRight" || e.key == "d") {
        if (page == "goal") return
        let index = getNextPage(true)
        if (pageOrder[index] == "goal") index++
        navigate(pageOrder[index])
      } else return
    }
  }
  if (!loaded)
    return (
      <>
        <div className="h-full relative">
          <div className="loader mx-auto"></div>
        </div>
      </>
    )
  return (
    <>
      <Navbar
        navigate={navigate}
        active={page}
        showContentFn={setShowContent}
      />
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
              switch (page) {
                case "intro":
                  return (
                    <Intro
                      className={"page" + animClass}
                      showContent={showContent}
                    />
                  )
                case "skill":
                  return (
                    <Skill
                      className={"page" + animClass}
                      showContent={showContent}
                    />
                  )
                case "timeline":
                  return (
                    <Timeline
                      className={"page" + animClass}
                      showContent={showContent}
                    />
                  )
                case "goal":
                  return (
                    <Goal
                      className={"page" + animClass}
                      showContent={showContent}
                    />
                  )
                case "gallery":
                  return (
                    <Gallery
                      className={"page" + animClass}
                      showContent={showContent}
                    />
                  )
              }
            }}
          </Transition>
        </TransitionGroup>
      </div>
    </>
  )
}

export default IndexPage