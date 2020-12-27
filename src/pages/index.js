import React from "react"
import Navbar from "../components/navbar"
import { TransitionGroup, Transition } from "react-transition-group"
import "../page-animations.css"
import "./index.css"

const Home = props => <div className="text-center mt-96">Home</div>

const About = props => <div className="text-center mt-96">About</div>

const IndexPage = () => {
  const [page, setPage] = React.useState("/")
  return (
    <>
      <Navbar navigate={setPage} />
      <div className="page-wrapper">
        <TransitionGroup component={null}>
          <Transition key={page} timeout={2000}>
            {state => {
              let animClass = ""
              if (state === "entering") {
                animClass = "rotate-right-enter"
              }
              if (state === "exiting") {
                animClass = "rotate-right-exit"
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
