import React from "react"
import Navbar from "../components/navbar"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { TransitionGroup, Transition } from "react-transition-group"
import "../page-animations.css"
import "./index.css"

const MainLinks = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  )
}
const Home = props => <div className="text-center mt-96">Home</div>

const About = props => <div className="text-center mt-96">About</div>

const IndexPage = () => (
  <BrowserRouter>
    <Navbar>
      <MainLinks />
    </Navbar>
    <Route
      render={({ location }) => {
        const { pathname, key } = location
        return (
          <div className="page-wrapper">
            <TransitionGroup component={null}>
              <Transition key={pathname} timeout={2000}>
                {state => {
                  let animClass = ""
                  if (state === "entering") {
                    animClass = "rotate-right-enter"
                  }
                  if (state === "exiting") {
                    animClass = "rotate-right-exit"
                  }
                  return (
                    <div className={"bg-gray-300 page " + animClass}>
                      <Switch location={location}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                      </Switch>
                    </div>
                  )
                }}
              </Transition>
            </TransitionGroup>
          </div>
        )
      }}
    />
  </BrowserRouter>
)
export default IndexPage
