import React from "react"
import star1 from "../images/star1.png"
import star2 from "../images/star2.png"

export default function Goal({ className }) {
  return (
    <div className={className + " bg-goal"}>
      <div
        className="relative w-1/2 mx-auto h-full"
        onWheel={e => {
          console.log("scrolled")
          e.stopPropagation()
        }}
      >
        <div className="absolute top-0 transform scale-50">
          <div className="relative">
            <img src={star1} />
            <div className="absolute-center text-4xl bg-opacity-75 bg-blue-200 p-5 text-center">
              hiii
            </div>
            w
          </div>
        </div>
      </div>
    </div>
  )
}
