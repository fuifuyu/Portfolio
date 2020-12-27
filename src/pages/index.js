import React from "react"
import Navbar from "../components/navbar"
import { TransitionGroup, Transition } from "react-transition-group"
import { roomMap, animPresetMap } from "../maps/animationMap"
import "../page-animations.css"
import "./index.css"

const Home = props => <div className="text-center mt-96">Home</div>

const About = props => <div className="text-center mt-96">About</div>

let nextPage = "/"
let curPage = "/"

const IndexPage = () => {
  const [page, setPage] = React.useState("/")
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
          <Transition key={page} timeout={800}>
            {state => {
              let animClass = ""
              if (state == "entering" || state == "exiting") {
                let preset = roomMap[curPage][nextPage]
                if (preset) {
                  animClass = animPresetMap[preset][state]
                }
              }
              let comp
              switch (page) {
                case "/":
                  comp = <Home />
                  break
                case "/about":
                  comp = <About />
                  break
              }
              return (
                <div className={"bg-gray-300 page " + animClass}>{comp}</div>
              )
            }}
          </Transition>
        </TransitionGroup>
      </div>
    </>
  )
}
export default IndexPage
