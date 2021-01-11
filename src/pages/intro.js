import React, { useEffect } from "react"
import "../animation/animation.css"

export default function Intro({ className, showContent = true }) {
  let ref = React.createRef()
  useEffect(() => {
    ref.current?.addEventListener("animationend", e => {
      e.stopPropagation()
    })
  }, [])
  return (
    <div className={className + " bg-intro flex flex-col justify-center"}>
      {showContent && (
        <div
          ref={ref}
          className="bg-tint-1 bg-opacity-60 w-7/12 p-8 ml-10 text-gray-700 rounded-lg text-2xl fade-in"
        >
          <p className="mb-3 text-4xl">Hi!</p>
          <p>I am a computer science student in Canada who likes to draw.</p>
          <p>
            I wanted to express my character - with not only plain words on the
            screen or paper. This is also a test ground to play with concepts
            that I learnt. I will evolve, and so will the website :)
          </p>
          <p>I hope you have a good journey and happy learning!</p>
          <p className="text-base">
            ( Hint: Try exploring around with "ASDW"/arrow/scrollwheel! )
          </p>
          <p className="mt-1">Contact: hhasuky@gmail.com</p>
        </div>
      )}
    </div>
  )
}
