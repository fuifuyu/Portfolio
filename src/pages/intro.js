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
          className="bg-tint-1 bg-opacity-50 sm:w-7/12 p-2 sm:p-8 mx-3 sm:mx-5 md:mx-10 text-gray-700 rounded text-base sm:text-lg md:text-xl fade-in"
        >
          <p className="mb-1 sm:mb-4 text-xl sm:text-2xl md:text-3xl">
            Hi - thank you for dropping by!
          </p>
          <p>
            This website is inspired by many creative, talented individuals who
            created an interesting web browsing experience through their online
            portfolio. Seeing them, I became motivated to create a unique world
            that express my character as well by combining the use of art and
            technology.
          </p>
          <p className="mt-3">
            It is also a test ground to play with concepts that I learnt. I will
            evolve, and so will the website :)
          </p>
          <p className="text-base mb-3">
            ( Hint: Try exploring around with "ASDW"/arrow/scrollwheel! )
          </p>
          <p>I hope you have a good journey and happy learning!</p>
          <p className="text-red-800 text-base text-center">
            **Use a computer for the complete experience**
          </p>
        </div>
      )}
    </div>
  )
}
