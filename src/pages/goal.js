import React from "react"
import { callbackify } from "util"
import ImageContainer from "../components/image-container"
import star1 from "../images/star1.png"
import star2 from "../images/star2.png"

export default function Goal({ className }) {
  return (
    <div className={className + " bg-goal"}>
      <div className="relative w-4/5 mx-auto h-full">
        <div className="absolute top-0">
          <ImageContainer src={star1} size={{ width: "20rem" }}>
            <div className="absolute-center text-xl bg-opacity-75 bg-tint px-3 py-2 rounded text-center">
              hii
            </div>
          </ImageContainer>
        </div>
        <div className="absolute bottom-1/4 left-1/4">
          <ImageContainer src={star2} size={{ width: "25rem" }}>
            <div className="absolute-center text-xl bg-opacity-75 bg-tint px-3 py-2 rounded text-center">
              hii
            </div>
          </ImageContainer>
        </div>
      </div>
    </div>
  )
}
