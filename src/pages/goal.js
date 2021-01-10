import React from "react"
import ImageContainer from "../components/image-container"
import star1 from "../images/star1.png"
import star2 from "../images/star2.png"

export default function Goal({ className, showContent }) {
  return (
    <div className={className + " bg-goal"}>
      <div
        className={`relative w-4/5 mx-auto h-full ${showContent ? "" : "hide"}`}
      >
        <>
          <div className="absolute top-0">
            <ImageContainer src={star1} size={{ width: "20rem" }}>
              <div className="content absolute-center-bottom goal-container">
                hii
              </div>
            </ImageContainer>
          </div>
          <div className="absolute bottom-1/4 left-1/4">
            <ImageContainer src={star2} size={{ width: "25rem" }}>
              <div className="content absolute-center-bottom goal-container">
                hii
              </div>
            </ImageContainer>
          </div>
        </>
      </div>
    </div>
  )
}
