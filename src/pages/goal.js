import React from "react"
import ImageContainer from "../components/image-container"
import star1 from "../images/star1.png"
import star2 from "../images/star2.png"

export default function Goal({ className, showContent }) {
  return (
    <div className={className + " bg-goal"}>
      <div className={`relative mx-auto h-full ${showContent ? "" : "hide"}`}>
        <div className="absolute-center">
          <ImageContainer src={star1} size={{ width: "30rem" }}>
            <div className="content absolute-center-bottom goal-container">
              <div>
                Reading
                <div className="truncate">
                  "Computer Graphics, Principles And Practice"
                </div>
              </div>
            </div>
          </ImageContainer>
        </div>
        <div className="absolute bottom-0 left-5">
          <ImageContainer src={star1} size={{ width: "21rem" }}>
            <div className="content absolute-center-bottom goal-container">
              <div>Participate in illustration competition!</div>
            </div>
          </ImageContainer>
        </div>
        <div className="absolute top-0 right-32">
          <ImageContainer src={star2} size={{ width: "25rem" }}>
            <div className="content absolute-center-bottom goal-container">
              <div>Integrate computer graphics concept into the website</div>
            </div>
          </ImageContainer>
        </div>
        <div className="absolute -top-10 left-32">
          <ImageContainer src={star2} size={{ width: "27rem" }}>
            <div className="content absolute-center-bottom goal-container">
              <div>Exchange abroad!</div>
            </div>
          </ImageContainer>
        </div>
        <div className="absolute bottom-10 right-10">
          <ImageContainer src={star1} size={{ width: "23rem" }}>
            <div className="content absolute-center-bottom goal-container">
              <div>Something...</div>
            </div>
          </ImageContainer>
        </div>
      </div>
    </div>
  )
}
