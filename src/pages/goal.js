import React from "react"
import ImageContainer from "../components/image-container"
import star1 from "../images/star1.png"
import star2 from "../images/star2.png"

export default function Goal({ className, showContent }) {
  return (
    <div className={className + " bg-goal"}>
      <div
        className={`relative mx-4 xl:mx-24 h-full pb-12 flex flex-row flex-wrap content-around ${
          showContent ? "" : "hide"
        }`}
      >
        <ImageContainer src={star1} className="relative w-1/3">
          <div className="content absolute-center-bottom goal-container text-xs xl:text-base">
            <div>Participate in illustration competition!</div>
          </div>
        </ImageContainer>
        <ImageContainer
          src={star1}
          className="relative w-1/3 transform translate-y-full sm:translate-y-1/2 md:translate-y-1/4"
        >
          <div className="content absolute-center-bottom goal-container text-xs xl:text-base">
            <div>
              Reading
              <div className="sm:truncate">
                "Computer Graphics, Principles And Practice"
              </div>
            </div>
          </div>
        </ImageContainer>
        <ImageContainer src={star2} className="relative w-1/3">
          <div className="content absolute-center-bottom goal-container text-xs xl:text-base">
            <div>Excercise more...</div>
          </div>
        </ImageContainer>
        <ImageContainer src={star2} className="relative w-1/3">
          <div className="content absolute-center-top goal-container text-xs xl:text-base">
            <div>Exchange abroad!</div>
          </div>
        </ImageContainer>
        <div className="w-1/3"></div>
        <ImageContainer src={star1} className="relative w-1/3">
          <div className="content absolute-center-top goal-container text-xs xl:text-base">
            <div>Work on open source project</div>
          </div>
        </ImageContainer>
      </div>
    </div>
  )
}
